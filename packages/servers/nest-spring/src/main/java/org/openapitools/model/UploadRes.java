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

public class UploadRes   {
  @JsonProperty("ok")
  private Boolean ok;

  @JsonProperty("error")
  private String error;

  @JsonProperty("file")
  private String file;

  public UploadRes ok(Boolean ok) {
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

  public UploadRes error(String error) {
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

  public UploadRes file(String file) {
    this.file = file;
    return this;
  }

  /**
   * 
   * @return file
  */
  @ApiModelProperty(value = "")


  public String getFile() {
    return file;
  }

  public void setFile(String file) {
    this.file = file;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UploadRes uploadRes = (UploadRes) o;
    return Objects.equals(this.ok, uploadRes.ok) &&
        Objects.equals(this.error, uploadRes.error) &&
        Objects.equals(this.file, uploadRes.file);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ok, error, file);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UploadRes {\n");
    
    sb.append("    ok: ").append(toIndentedString(ok)).append("\n");
    sb.append("    error: ").append(toIndentedString(error)).append("\n");
    sb.append("    file: ").append(toIndentedString(file)).append("\n");
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

