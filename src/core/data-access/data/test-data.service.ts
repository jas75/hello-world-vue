import { GetAllPlayers } from "@/core/models/data/players/get-all-players";
import { ResponseData } from "@/core/models/data/response-data";
import http from "@/http-common";

class TestDataService {
  public getAllPlayers(): Promise<ResponseData<GetAllPlayers[]>> {
    return http.get("/api/Players");
  }
}

export default new TestDataService();
