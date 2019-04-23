import { Module } from "@nestjs/common";
import { AuthModule } from "nestx-auth";
import { MockUserService } from "./mock.user.service";
@Module({
  imports: [
    AuthModule.registerAsync({
      providers: [
        {
          provide: "IUserService",
          useClass: MockUserService
        }
      ]
    })
  ]
})
export class AppModule {}
