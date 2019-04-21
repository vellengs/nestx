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
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-04-21T15:04:16.680Z[Etc/UTC]")

public class EditDictReq   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("category")
  private String category;

  @JsonProperty("name")
  private String name;

  @JsonProperty("translate")
  private String translate;

  @JsonProperty("expand")
  private Object expand = null;

  public EditDictReq id(String id) {
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

  public EditDictReq category(String category) {
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

  public EditDictReq name(String name) {
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

  public EditDictReq translate(String translate) {
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

  public EditDictReq expand(Object expand) {
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
    EditDictReq editDictReq = (EditDictReq) o;
    return Objects.equals(this.id, editDictReq.id) &&
        Objects.equals(this.category, editDictReq.category) &&
        Objects.equals(this.name, editDictReq.name) &&
        Objects.equals(this.translate, editDictReq.translate) &&
        Objects.equals(this.expand, editDictReq.expand);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, category, name, translate, expand);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditDictReq {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
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

