import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BaseModule } from "./base.module";
const mongodbUri = "mongodb://localhost/nestx-server-test";

@Module({
  imports: [
    MongooseModule.forRoot(mongodbUri, {
      useCreateIndex: true,
      useNewUrlParser: true
    }),
    BaseModule
  ]
})
export class AppModule {}
