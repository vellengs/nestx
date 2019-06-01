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

public class CreateMediaDto   {
  @JsonProperty("name")
  private String name;

  @JsonProperty("caption")
  private String caption;

  @JsonProperty("description")
  private String description;

  @JsonProperty("ext")
  private String ext;

  @JsonProperty("url")
  private String url;

  @JsonProperty("uri")
  private String uri;

  public CreateMediaDto name(String name) {
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

  public CreateMediaDto caption(String caption) {
    this.caption = caption;
    return this;
  }

  /**
   * 
   * @return caption
  */
  @ApiModelProperty(value = "")


  public String getCaption() {
    return caption;
  }

  public void setCaption(String caption) {
    this.caption = caption;
  }

  public CreateMediaDto description(String description) {
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

  public CreateMediaDto ext(String ext) {
    this.ext = ext;
    return this;
  }

  /**
   * 
   * @return ext
  */
  @ApiModelProperty(value = "")


  public String getExt() {
    return ext;
  }

  public void setExt(String ext) {
    this.ext = ext;
  }

  public CreateMediaDto url(String url) {
    this.url = url;
    return this;
  }

  /**
   * 
   * @return url
  */
  @ApiModelProperty(value = "")


  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public CreateMediaDto uri(String uri) {
    this.uri = uri;
    return this;
  }

  /**
   * 
   * @return uri
  */
  @ApiModelProperty(value = "")


  public String getUri() {
    return uri;
  }

  public void setUri(String uri) {
    this.uri = uri;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateMediaDto createMediaDto = (CreateMediaDto) o;
    return Objects.equals(this.name, createMediaDto.name) &&
        Objects.equals(this.caption, createMediaDto.caption) &&
        Objects.equals(this.description, createMediaDto.description) &&
        Objects.equals(this.ext, createMediaDto.ext) &&
        Objects.equals(this.url, createMediaDto.url) &&
        Objects.equals(this.uri, createMediaDto.uri);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, caption, description, ext, url, uri);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateMediaDto {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    caption: ").append(toIndentedString(caption)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    ext: ").append(toIndentedString(ext)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
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

