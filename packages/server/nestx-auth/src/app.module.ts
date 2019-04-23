import { Module } from "@nestjs/common";
import { AuthModule } from "./auth.module";
import { MockUserService } from "./mock.user.service";
@Module({
  imports: [
    AuthModule.registerAsync({
      imports: [],
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
