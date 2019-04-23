import { ApiModelProperty } from "@nestjs/swagger";

export class KeyValueDto {
    @ApiModelProperty()
    label: string;
    @ApiModelProperty()
    value: string;
}