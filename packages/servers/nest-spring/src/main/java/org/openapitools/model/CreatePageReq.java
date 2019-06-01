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

public class CreatePageReq   {
  @JsonProperty("name")
  private String name;

  @JsonProperty("keyword")
  private String keyword;

  @JsonProperty("title")
  private String title;

  @JsonProperty("description")
  private String description;

  @JsonProperty("sort")
  private Double sort;

  @JsonProperty("disable")
  private Boolean disable;

  @JsonProperty("meta")
  private String meta;

  @JsonProperty("publish")
  private String publish;

  @JsonProperty("content")
  private String content;

  @JsonProperty("template")
  private String template;

  public CreatePageReq name(String name) {
    this.name = name;
    return this;
  }

  /**
   * 
   * @return name
  */
  @ApiModelProperty(value = "")


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public CreatePageReq keyword(String keyword) {
    this.keyword = keyword;
    return this;
  }

  /**
   * 
   * @return keyword
  */
  @ApiModelProperty(value = "")


  public String getKeyword() {
    return keyword;
  }

  public void setKeyword(String keyword) {
    this.keyword = keyword;
  }

  public CreatePageReq title(String title) {
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

  public CreatePageReq description(String description) {
    this.description = description;
    return this;
  }

  /**
   * 
   * @return description
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public CreatePageReq sort(Double sort) {
    this.sort = sort;
    return this;
  }

  /**
   * 
   * @return sort
  */
  @ApiModelProperty(value = "")


  public Double getSort() {
    return sort;
  }

  public void setSort(Double sort) {
    this.sort = sort;
  }

  public CreatePageReq disable(Boolean disable) {
    this.disable = disable;
    return this;
  }

  /**
   * 
   * @return disable
  */
  @ApiModelProperty(value = "")


  public Boolean getDisable() {
    return disable;
  }

  public void setDisable(Boolean disable) {
    this.disable = disable;
  }

  public CreatePageReq meta(String meta) {
    this.meta = meta;
    return this;
  }

  /**
   * 
   * @return meta
  */
  @ApiModelProperty(value = "")


  public String getMeta() {
    return meta;
  }

  public void setMeta(String meta) {
    this.meta = meta;
  }

  public CreatePageReq publish(String publish) {
    this.publish = publish;
    return this;
  }

  /**
   * 
   * @return publish
  */
  @ApiModelProperty(value = "")


  public String getPublish() {
    return publish;
  }

  public void setPublish(String publish) {
    this.publish = publish;
  }

  public CreatePageReq content(String content) {
    this.content = content;
    return this;
  }

  /**
   * 
   * @return content
  */
  @ApiModelProperty(value = "")


  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public CreatePageReq template(String template) {
    this.template = template;
    return this;
  }

  /**
   * 
   * @return template
  */
  @ApiModelProperty(value = "")


  public String getTemplate() {
    return template;
  }

  public void setTemplate(String template) {
    this.template = template;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreatePageReq createPageReq = (CreatePageReq) o;
    return Objects.equals(this.name, createPageReq.name) &&
        Objects.equals(this.keyword, createPageReq.keyword) &&
        Objects.equals(this.title, createPageReq.title) &&
        Objects.equals(this.description, createPageReq.description) &&
        Objects.equals(this.sort, createPageReq.sort) &&
        Objects.equals(this.disable, createPageReq.disable) &&
        Objects.equals(this.meta, createPageReq.meta) &&
        Objects.equals(this.publish, createPageReq.publish) &&
        Objects.equals(this.content, createPageReq.content) &&
        Objects.equals(this.template, createPageReq.template);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, keyword, title, description, sort, disable, meta, publish, content, template);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreatePageReq {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    keyword: ").append(toIndentedString(keyword)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    sort: ").append(toIndentedString(sort)).append("\n");
    sb.append("    disable: ").append(toIndentedString(disable)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    publish: ").append(toIndentedString(publish)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    template: ").append(toIndentedString(template)).append("\n");
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

