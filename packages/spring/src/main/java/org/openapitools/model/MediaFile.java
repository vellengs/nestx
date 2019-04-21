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

public class MediaFile   {
  @JsonProperty("fieldname")
  private String fieldname;

  @JsonProperty("originalname")
  private String originalname;

  @JsonProperty("encoding")
  private String encoding;

  @JsonProperty("mimetype")
  private String mimetype;

  @JsonProperty("destination")
  private String destination;

  @JsonProperty("filename")
  private String filename;

  @JsonProperty("path")
  private String path;

  @JsonProperty("size")
  private Double size;

  public MediaFile fieldname(String fieldname) {
    this.fieldname = fieldname;
    return this;
  }

  /**
   * 
   * @return fieldname
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getFieldname() {
    return fieldname;
  }

  public void setFieldname(String fieldname) {
    this.fieldname = fieldname;
  }

  public MediaFile originalname(String originalname) {
    this.originalname = originalname;
    return this;
  }

  /**
   * 
   * @return originalname
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getOriginalname() {
    return originalname;
  }

  public void setOriginalname(String originalname) {
    this.originalname = originalname;
  }

  public MediaFile encoding(String encoding) {
    this.encoding = encoding;
    return this;
  }

  /**
   * 
   * @return encoding
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getEncoding() {
    return encoding;
  }

  public void setEncoding(String encoding) {
    this.encoding = encoding;
  }

  public MediaFile mimetype(String mimetype) {
    this.mimetype = mimetype;
    return this;
  }

  /**
   * 
   * @return mimetype
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getMimetype() {
    return mimetype;
  }

  public void setMimetype(String mimetype) {
    this.mimetype = mimetype;
  }

  public MediaFile destination(String destination) {
    this.destination = destination;
    return this;
  }

  /**
   * 
   * @return destination
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getDestination() {
    return destination;
  }

  public void setDestination(String destination) {
    this.destination = destination;
  }

  public MediaFile filename(String filename) {
    this.filename = filename;
    return this;
  }

  /**
   * 
   * @return filename
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getFilename() {
    return filename;
  }

  public void setFilename(String filename) {
    this.filename = filename;
  }

  public MediaFile path(String path) {
    this.path = path;
    return this;
  }

  /**
   * 
   * @return path
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getPath() {
    return path;
  }

  public void setPath(String path) {
    this.path = path;
  }

  public MediaFile size(Double size) {
    this.size = size;
    return this;
  }

  /**
   * 
   * @return size
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getSize() {
    return size;
  }

  public void setSize(Double size) {
    this.size = size;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MediaFile mediaFile = (MediaFile) o;
    return Objects.equals(this.fieldname, mediaFile.fieldname) &&
        Objects.equals(this.originalname, mediaFile.originalname) &&
        Objects.equals(this.encoding, mediaFile.encoding) &&
        Objects.equals(this.mimetype, mediaFile.mimetype) &&
        Objects.equals(this.destination, mediaFile.destination) &&
        Objects.equals(this.filename, mediaFile.filename) &&
        Objects.equals(this.path, mediaFile.path) &&
        Objects.equals(this.size, mediaFile.size);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fieldname, originalname, encoding, mimetype, destination, filename, path, size);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MediaFile {\n");
    
    sb.append("    fieldname: ").append(toIndentedString(fieldname)).append("\n");
    sb.append("    originalname: ").append(toIndentedString(originalname)).append("\n");
    sb.append("    encoding: ").append(toIndentedString(encoding)).append("\n");
    sb.append("    mimetype: ").append(toIndentedString(mimetype)).append("\n");
    sb.append("    destination: ").append(toIndentedString(destination)).append("\n");
    sb.append("    filename: ").append(toIndentedString(filename)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
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

