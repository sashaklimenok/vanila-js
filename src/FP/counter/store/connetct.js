import { store } from 'src/FP/counter/store/store';

export const connect = (mapStateToProps, mapDispatchToState) => (component) => {
  let props = {
    ...mapStateToProps(store.getState()),
    ...mapDispatchToState(store.dispatch),
  };
  store.subscribe(() => {
    props = {
      ...mapStateToProps(store.getState()),
      ...mapDispatchToState(store.dispatch),
    };
    component({ props });
  });
  return component({ props });
};
