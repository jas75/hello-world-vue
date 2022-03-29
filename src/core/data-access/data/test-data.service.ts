import { GetAllPlayers } from "@/core/models/data/players/get-all-players";
import { ResponseData } from "@/core/models/data/response-data";
import http from "@/http-common";

class TestDataService {
  public getAllPlayers(): Promise<ResponseData<GetAllPlayers[]>> {
    return http.get("/api/Players");
  }

  public login() {
    const data = {
      email: "nilson@email.com",
      password: "nilson",
    };
    return http.post("http://localhost:3000/api/auth/login", data);
  }
}

export default new TestDataService();
