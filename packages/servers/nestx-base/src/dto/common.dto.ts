import { IsString } from "class-validator";

export class KeyValueDto {
  @IsString()
  label: string;
  @IsString()
  value: string;
}
