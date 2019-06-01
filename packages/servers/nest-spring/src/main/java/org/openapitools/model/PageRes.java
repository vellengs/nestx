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

public class PageRes   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("name")
  private String name;

  @JsonProperty("title")
  private String title;

  @JsonProperty("description")
  private String description;

  @JsonProperty("sort")
  private Double sort;

  @JsonProperty("publish")
  private String publish;

  @JsonProperty("disable")
  private Boolean disable;

  @JsonProperty("meta")
  private String meta;

  @JsonProperty("content")
  private String content;

  @JsonProperty("template")
  private String template;

  public PageRes id(String id) {
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

  public PageRes name(String name) {
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

  public PageRes title(String title) {
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

  public PageRes description(String description) {
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

  public PageRes sort(Double sort) {
    this.sort = sort;
    return this;
  }

  /**
   * 
   * @return sort
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getSort() {
    return sort;
  }

  public void setSort(Double sort) {
    this.sort = sort;
  }

  public PageRes publish(String publish) {
    this.publish = publish;
    return this;
  }

  /**
   * 
   * @return publish
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getPublish() {
    return publish;
  }

  public void setPublish(String publish) {
    this.publish = publish;
  }

  public PageRes disable(Boolean disable) {
    this.disable = disable;
    return this;
  }

  /**
   * 
   * @return disable
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getDisable() {
    return disable;
  }

  public void setDisable(Boolean disable) {
    this.disable = disable;
  }

  public PageRes meta(String meta) {
    this.meta = meta;
    return this;
  }

  /**
   * 
   * @return meta
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getMeta() {
    return meta;
  }

  public void setMeta(String meta) {
    this.meta = meta;
  }

  public PageRes content(String content) {
    this.content = content;
    return this;
  }

  /**
   * 
   * @return content
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public PageRes template(String template) {
    this.template = template;
    return this;
  }

  /**
   * 
   * @return template
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


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
    PageRes pageRes = (PageRes) o;
    return Objects.equals(this.id, pageRes.id) &&
        Objects.equals(this.name, pageRes.name) &&
        Objects.equals(this.title, pageRes.title) &&
        Objects.equals(this.description, pageRes.description) &&
        Objects.equals(this.sort, pageRes.sort) &&
        Objects.equals(this.publish, pageRes.publish) &&
        Objects.equals(this.disable, pageRes.disable) &&
        Objects.equals(this.meta, pageRes.meta) &&
        Objects.equals(this.content, pageRes.content) &&
        Objects.equals(this.template, pageRes.template);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, title, description, sort, publish, disable, meta, content, template);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PageRes {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    sort: ").append(toIndentedString(sort)).append("\n");
    sb.append("    publish: ").append(toIndentedString(publish)).append("\n");
    sb.append("    disable: ").append(toIndentedString(disable)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
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

