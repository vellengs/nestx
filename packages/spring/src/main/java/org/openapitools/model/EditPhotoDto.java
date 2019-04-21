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

public class EditPhotoDto   {
  @JsonProperty("id")
  private String id;

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

  public EditPhotoDto id(String id) {
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

  public EditPhotoDto name(String name) {
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

  public EditPhotoDto caption(String caption) {
    this.caption = caption;
    return this;
  }

  /**
   * 
   * @return caption
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getCaption() {
    return caption;
  }

  public void setCaption(String caption) {
    this.caption = caption;
  }

  public EditPhotoDto description(String description) {
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

  public EditPhotoDto ext(String ext) {
    this.ext = ext;
    return this;
  }

  /**
   * 
   * @return ext
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getExt() {
    return ext;
  }

  public void setExt(String ext) {
    this.ext = ext;
  }

  public EditPhotoDto url(String url) {
    this.url = url;
    return this;
  }

  /**
   * 
   * @return url
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public EditPhotoDto uri(String uri) {
    this.uri = uri;
    return this;
  }

  /**
   * 
   * @return uri
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


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
    EditPhotoDto editPhotoDto = (EditPhotoDto) o;
    return Objects.equals(this.id, editPhotoDto.id) &&
        Objects.equals(this.name, editPhotoDto.name) &&
        Objects.equals(this.caption, editPhotoDto.caption) &&
        Objects.equals(this.description, editPhotoDto.description) &&
        Objects.equals(this.ext, editPhotoDto.ext) &&
        Objects.equals(this.url, editPhotoDto.url) &&
        Objects.equals(this.uri, editPhotoDto.uri);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, caption, description, ext, url, uri);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditPhotoDto {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
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

