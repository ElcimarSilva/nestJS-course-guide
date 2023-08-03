import { Controller, Get } from "@nestjs/common";

@Controller('/app-controller')
export class AppController {
    @Get('/get-first-hello')
    getRootRoute() {
        return "Hello World!!" + "Eae Nathalia";
    }

    @Get('/bye')
    byeThere() {
        return "Bye there";
    }
}