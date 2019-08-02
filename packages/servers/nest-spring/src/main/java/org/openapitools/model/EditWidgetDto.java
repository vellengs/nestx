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

public class EditWidgetDto   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("name")
  private String name;

  @JsonProperty("title")
  private String title;

  @JsonProperty("params")
  private Object params = null;

  @JsonProperty("type")
  private String type;

  public EditWidgetDto id(String id) {
    this.id = id;
    return this;
  }

  /**
   * 
   * @return id
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public EditWidgetDto name(String name) {
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

  public EditWidgetDto title(String title) {
    this.title = title;
    return this;
  }

  /**
   * 
   * @return title
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public EditWidgetDto params(Object params) {
    this.params = params;
    return this;
  }

  /**
   * 
   * @return params
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public Object getParams() {
    return params;
  }

  public void setParams(Object params) {
    this.params = params;
  }

  public EditWidgetDto type(String type) {
    this.type = type;
    return this;
  }

  /**
   * 
   * @return type
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EditWidgetDto editWidgetDto = (EditWidgetDto) o;
    return Objects.equals(this.id, editWidgetDto.id) &&
        Objects.equals(this.name, editWidgetDto.name) &&
        Objects.equals(this.title, editWidgetDto.title) &&
        Objects.equals(this.params, editWidgetDto.params) &&
        Objects.equals(this.type, editWidgetDto.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, title, params, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditWidgetDto {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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

