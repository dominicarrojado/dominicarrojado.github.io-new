import { render, screen } from '@testing-library/react';
import { AppProps } from 'next/app';
import {
  getFakeJson,
  getFakeSentence,
  getRandomRoute,
} from '../../lib/test-helpers';
import Events from '../../modules/Events';
import * as ga from '../../lib/google-analytics';
import * as Layout from '../../components/layout';
import App from '../_app.page';

describe('<App />', () => {
  const renderComponent = (appProps: AppProps) => {
    render(<App {...appProps} />);
  };

  it('should render with layout', () => {
    const layoutSpy = jest.spyOn(Layout, 'default');
    const route = getRandomRoute();

    renderComponent({
      router: { route, events: new Events() },
      Component: jest.fn(() => <>{getFakeSentence()}</>),
    } as any);

    expect(layoutSpy).toBeCalledTimes(1);
    expect(layoutSpy).toBeCalledWith(expect.objectContaining({ route }), {});
  });

  it('should render Component prop', () => {
    const text = getFakeSentence();
    const children = <>{text}</>;
    const componentSpy = jest.fn(() => children);
    const pageProps = getFakeJson();

    renderComponent({
      pageProps,
      router: { route: getRandomRoute(), events: new Events() },
      Component: componentSpy,
    } as any);

    expect(componentSpy).toBeCalledTimes(1);
    expect(componentSpy).toBeCalledWith(pageProps, {});
    expect(screen.queryByText(text)).toBeInTheDocument();
  });

  it('should track route change', () => {
    const trackEventSpy = jest.spyOn(ga, 'trackEvent');
    const routerEvents = new Events();

    renderComponent({
      router: { route: getRandomRoute(), events: routerEvents },
      Component: jest.fn(() => <>{getFakeSentence()}</>),
    } as any);

    routerEvents.emit('routeChangeComplete', getRandomRoute());

    expect(trackEventSpy).toBeCalledTimes(1);
    expect(trackEventSpy).toBeCalledWith({ event: 'page_view' });
  });
});
