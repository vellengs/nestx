package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-04-21T15:04:16.680Z[Etc/UTC]")

public class UploadMultipleRes   {
  @JsonProperty("ok")
  private Boolean ok;

  @JsonProperty("error")
  private String error;

  @JsonProperty("files")
  @Valid
  private List<String> files = null;

  public UploadMultipleRes ok(Boolean ok) {
    this.ok = ok;
    return this;
  }

  /**
   * 
   * @return ok
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getOk() {
    return ok;
  }

  public void setOk(Boolean ok) {
    this.ok = ok;
  }

  public UploadMultipleRes error(String error) {
    this.error = error;
    return this;
  }

  /**
   * 
   * @return error
  */
  @ApiModelProperty(value = "")


  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }

  public UploadMultipleRes files(List<String> files) {
    this.files = files;
    return this;
  }

  public UploadMultipleRes addFilesItem(String filesItem) {
    if (this.files == null) {
      this.files = new ArrayList<>();
    }
    this.files.add(filesItem);
    return this;
  }

  /**
   * 
   * @return files
  */
  @ApiModelProperty(value = "")


  public List<String> getFiles() {
    return files;
  }

  public void setFiles(List<String> files) {
    this.files = files;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UploadMultipleRes uploadMultipleRes = (UploadMultipleRes) o;
    return Objects.equals(this.ok, uploadMultipleRes.ok) &&
        Objects.equals(this.error, uploadMultipleRes.error) &&
        Objects.equals(this.files, uploadMultipleRes.files);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ok, error, files);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UploadMultipleRes {\n");
    
    sb.append("    ok: ").append(toIndentedString(ok)).append("\n");
    sb.append("    error: ").append(toIndentedString(error)).append("\n");
    sb.append("    files: ").append(toIndentedString(files)).append("\n");
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

