package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class CreateAppearanceReq   {
  @JsonProperty("name")
  private String name;

  @JsonProperty("option")
  private String option;

  @JsonProperty("data")
  private String data;

  public CreateAppearanceReq name(String name) {
    this.name = name;
    return this;
  }

  /**
   * 
   * @return name
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public CreateAppearanceReq option(String option) {
    this.option = option;
    return this;
  }

  /**
   * 
   * @return option
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getOption() {
    return option;
  }

  public void setOption(String option) {
    this.option = option;
  }

  public CreateAppearanceReq data(String data) {
    this.data = data;
    return this;
  }

  /**
   * 
   * @return data
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getData() {
    return data;
  }

  public void setData(String data) {
    this.data = data;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateAppearanceReq createAppearanceReq = (CreateAppearanceReq) o;
    return Objects.equals(this.name, createAppearanceReq.name) &&
        Objects.equals(this.option, createAppearanceReq.option) &&
        Objects.equals(this.data, createAppearanceReq.data);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, option, data);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateAppearanceReq {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    option: ").append(toIndentedString(option)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

