import {ServerRenderingService} from 'server/service';

class ServerRenderingController {
   constructor(req, res, next) {
      this.req = req;
      this.res = res;
      this.next = next;
   }

   async create() {
      let {url} = this.req;
      let service = new ServerRenderingService(url);
      let content = await service.render();

      if(content) {
         this.res.end(content);
      }
      else {
         this.next();
      }
   }
}

export default ServerRenderingController;