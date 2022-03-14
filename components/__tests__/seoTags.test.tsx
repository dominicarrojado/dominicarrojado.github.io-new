import { render } from '@testing-library/react';
import * as Head from 'next/head';
import {
  getFakeDirectoryPath,
  getFakeImageUrl,
  getFakeNumber,
  getFakeSentence,
  getFakeSentences,
  getRandomRoute,
} from '../../lib/test-helpers';
import {
  MAIN_AUTHOR,
  MAIN_TITLE,
  MAIN_URL,
  SITE_NAME,
} from '../../lib/constants';
import SeoTags, { Props } from '../seoTags';

describe('<SeoTags />', () => {
  const renderComponent = (props: Props) => render(<SeoTags {...props} />);

  beforeEach(() => {
    jest
      .spyOn(Head, 'default')
      .mockImplementation(({ children }) => <>{children}</>);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('common meta tags', () => {
    const paths = ['/', getFakeDirectoryPath()];

    paths.forEach((path) => {
      describe(path === '/' ? 'path is index' : 'path is NOT index', () => {
        const title = getFakeSentence();
        const description = getFakeSentences();
        const imageUrl = getFakeImageUrl();
        const imageWidth = getFakeNumber();
        const imageHeight = getFakeNumber();

        beforeEach(() => {
          renderComponent({
            path,
            title,
            description,
            imageUrl,
            imageWidth,
            imageHeight,
          });
        });

        it('should render author tag', () => {
          const metaAuthor = document.querySelector('meta[name="author"]');

          expect(metaAuthor).toHaveAttribute('content', MAIN_AUTHOR);
        });

        it('should render description tags', () => {
          const metaDesc = document.querySelector('meta[name="description"]');
          const metaOgDesc = document.querySelector(
            'meta[property="og:description"]'
          );
          const metaTwitterDesc = document.querySelector(
            'meta[name="twitter:description"]'
          );

          expect(metaDesc).toHaveAttribute('content', description);
          expect(metaOgDesc).toHaveAttribute('content', description);
          expect(metaTwitterDesc).toHaveAttribute('content', description);
        });

        it('should render image url tags', () => {
          const metaOgImg = document.querySelector('meta[property="og:image"]');
          const metaOgSecureImg = document.querySelector(
            'meta[property="og:image:secure_url"]'
          );
          const metaTwitterImg = document.querySelector(
            'meta[name="twitter:image"]'
          );
          const fullImgUrl = `${MAIN_URL}${imageUrl}`;

          expect(metaOgImg).toHaveAttribute('content', fullImgUrl);
          expect(metaOgSecureImg).toHaveAttribute('content', fullImgUrl);
          expect(metaTwitterImg).toHaveAttribute('content', fullImgUrl);
        });

        it('should render site name tag', () => {
          const metaSiteName = document.querySelector(
            'meta[property="og:site_name"]'
          );

          expect(metaSiteName).toHaveAttribute('content', SITE_NAME);
        });

        it('should render image width tags', () => {
          const metaOgImgWidth = document.querySelector(
            'meta[property="og:image:width"]'
          );

          expect(metaOgImgWidth).toHaveAttribute(
            'content',
            imageWidth.toString()
          );
        });

        it('should render image height tags', () => {
          const metaOgImgHeight = document.querySelector(
            'meta[property="og:image:height"]'
          );

          expect(metaOgImgHeight).toHaveAttribute(
            'content',
            imageHeight.toString()
          );
        });
      });
    });
  });

  describe('path is index', () => {
    const path = '/';

    beforeEach(() => {
      renderComponent({
        path,
        title: getFakeSentence(),
        description: getFakeSentences(),
        imageUrl: getFakeImageUrl(),
        imageWidth: getFakeNumber(),
        imageHeight: getFakeNumber(),
      });
    });

    it('should render expected url tags', () => {
      const linkCanonical = document.querySelector('link[rel="canonical"]');
      const metaOgUrl = document.querySelector('meta[property="og:url"]');
      const metaUrl = `${MAIN_URL}${path}`;

      expect(linkCanonical).toHaveAttribute('href', metaUrl);
      expect(metaOgUrl).toHaveAttribute('content', metaUrl);
    });
  });

  describe('path is NOT index', () => {
    const path = getFakeDirectoryPath();
    const title = getFakeSentence();

    beforeEach(() => {
      renderComponent({
        path,
        title,
        description: getFakeSentences(),
        imageUrl: getFakeImageUrl(),
        imageWidth: getFakeNumber(),
        imageHeight: getFakeNumber(),
      });
    });

    it('should render expected url tags', () => {
      const linkCanonical = document.querySelector('link[rel="canonical"]');
      const metaOgUrl = document.querySelector('meta[property="og:url"]');
      const fullUrl = `${MAIN_URL}${path}/`;

      expect(linkCanonical).toHaveAttribute('href', fullUrl);
      expect(metaOgUrl).toHaveAttribute('content', fullUrl);
    });

    it('should render expected title tags', () => {
      const metaOgTitle = document.querySelector('meta[property="og:title"]');
      const metaTwitterTitle = document.querySelector(
        'meta[name="twitter:title"]'
      );
      const titleEl = document.querySelector('title');
      const expectedTitle = `${title} | ${MAIN_TITLE}`;

      expect(metaOgTitle).toHaveAttribute('content', expectedTitle);
      expect(metaTwitterTitle).toHaveAttribute('content', expectedTitle);
      expect(titleEl).toHaveTextContent(expectedTitle);
    });
  });

  describe('image props are not defined', () => {
    beforeEach(() => {
      renderComponent({
        path: getRandomRoute(),
        title: getFakeSentence(),
        description: getFakeSentences(),
      });
    });

    it('should render image url tags', () => {
      const metaOgImg = document.querySelector('meta[property="og:image"]');
      const metaOgSecureImg = document.querySelector(
        'meta[property="og:image:secure_url"]'
      );
      const metaTwitterImg = document.querySelector(
        'meta[name="twitter:image"]'
      );
      const fullImgUrl = `${MAIN_URL}/images/pages/guides-tips-and-tricks-to-web-development.png`;

      expect(metaOgImg).toHaveAttribute('content', fullImgUrl);
      expect(metaOgSecureImg).toHaveAttribute('content', fullImgUrl);
      expect(metaTwitterImg).toHaveAttribute('content', fullImgUrl);
    });

    it('should render image width tags', () => {
      const metaOgImgWidth = document.querySelector(
        'meta[property="og:image:width"]'
      );

      expect(metaOgImgWidth).toHaveAttribute('content', '2400');
    });

    it('should render image height tags', () => {
      const metaOgImgHeight = document.querySelector(
        'meta[property="og:image:height"]'
      );

      expect(metaOgImgHeight).toHaveAttribute('content', '1254');
    });
  });
});
