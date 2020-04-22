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
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2020-04-22T03:09:30.309Z[GMT]")

public class CreateArticleDto   {
  @JsonProperty("name")
  private String name;

  @JsonProperty("title")
  private String title;

  @JsonProperty("keyword")
  private String keyword;

  @JsonProperty("picture")
  private String picture;

  @JsonProperty("category")
  private String category;

  @JsonProperty("description")
  private String description;

  @JsonProperty("author")
  private String author;

  @JsonProperty("sort")
  private Double sort;

  @JsonProperty("disable")
  private Boolean disable;

  @JsonProperty("meta")
  private String meta;

  @JsonProperty("content")
  private String content;

  @JsonProperty("template")
  private String template;

  public CreateArticleDto name(String name) {
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

  public CreateArticleDto title(String title) {
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

  public CreateArticleDto keyword(String keyword) {
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

  public CreateArticleDto picture(String picture) {
    this.picture = picture;
    return this;
  }

  /**
   * 
   * @return picture
  */
  @ApiModelProperty(value = "")


  public String getPicture() {
    return picture;
  }

  public void setPicture(String picture) {
    this.picture = picture;
  }

  public CreateArticleDto category(String category) {
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

  public CreateArticleDto description(String description) {
    this.description = description;
    return this;
  }

  /**
   * 
   * @return description
  */
  @ApiModelProperty(value = "")


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public CreateArticleDto author(String author) {
    this.author = author;
    return this;
  }

  /**
   * 
   * @return author
  */
  @ApiModelProperty(value = "")


  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public CreateArticleDto sort(Double sort) {
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

  public CreateArticleDto disable(Boolean disable) {
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

  public CreateArticleDto meta(String meta) {
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

  public CreateArticleDto content(String content) {
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

  public CreateArticleDto template(String template) {
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
    CreateArticleDto createArticleDto = (CreateArticleDto) o;
    return Objects.equals(this.name, createArticleDto.name) &&
        Objects.equals(this.title, createArticleDto.title) &&
        Objects.equals(this.keyword, createArticleDto.keyword) &&
        Objects.equals(this.picture, createArticleDto.picture) &&
        Objects.equals(this.category, createArticleDto.category) &&
        Objects.equals(this.description, createArticleDto.description) &&
        Objects.equals(this.author, createArticleDto.author) &&
        Objects.equals(this.sort, createArticleDto.sort) &&
        Objects.equals(this.disable, createArticleDto.disable) &&
        Objects.equals(this.meta, createArticleDto.meta) &&
        Objects.equals(this.content, createArticleDto.content) &&
        Objects.equals(this.template, createArticleDto.template);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, title, keyword, picture, category, description, author, sort, disable, meta, content, template);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateArticleDto {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    keyword: ").append(toIndentedString(keyword)).append("\n");
    sb.append("    picture: ").append(toIndentedString(picture)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    author: ").append(toIndentedString(author)).append("\n");
    sb.append("    sort: ").append(toIndentedString(sort)).append("\n");
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

