
export default class BaseController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    };
    async setView() {
      await this.view.render(await this.model.toJSON());
    };
  }