import { GetAllPlayers } from "@/core/models/data/players/get-all-players";
import { ResponseData } from "@/core/models/data/response-data";
import testDataService from "../data/test-data.service";

class TestBusinessService {
  public getAllPlayers(): Promise<ResponseData<GetAllPlayers[]>> {
    return testDataService.getAllPlayers();
  }

  public login() {
    return testDataService.login();
  }
}

export default new TestBusinessService();
