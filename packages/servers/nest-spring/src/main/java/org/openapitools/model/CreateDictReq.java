package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-05-14T08:00:41.276Z[Etc/UTC]")

public class CreateDictReq   {
  @JsonProperty("category")
  private String category;

  @JsonProperty("name")
  private String name;

  @JsonProperty("translate")
  private String translate;

  @JsonProperty("expand")
  private Object expand = null;

  public CreateDictReq category(String category) {
    this.category = category;
    return this;
  }

  /**
   * 
   * @return category
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public CreateDictReq name(String name) {
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

  public CreateDictReq translate(String translate) {
    this.translate = translate;
    return this;
  }

  /**
   * 
   * @return translate
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getTranslate() {
    return translate;
  }

  public void setTranslate(String translate) {
    this.translate = translate;
  }

  public CreateDictReq expand(Object expand) {
    this.expand = expand;
    return this;
  }

  /**
   * 
   * @return expand
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Object getExpand() {
    return expand;
  }

  public void setExpand(Object expand) {
    this.expand = expand;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateDictReq createDictReq = (CreateDictReq) o;
    return Objects.equals(this.category, createDictReq.category) &&
        Objects.equals(this.name, createDictReq.name) &&
        Objects.equals(this.translate, createDictReq.translate) &&
        Objects.equals(this.expand, createDictReq.expand);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, name, translate, expand);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateDictReq {\n");
    
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    translate: ").append(toIndentedString(translate)).append("\n");
    sb.append("    expand: ").append(toIndentedString(expand)).append("\n");
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

