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

public class AccessToken   {
  @JsonProperty("expiresIn")
  private Double expiresIn;

  @JsonProperty("accessToken")
  private String accessToken;

  public AccessToken expiresIn(Double expiresIn) {
    this.expiresIn = expiresIn;
    return this;
  }

  /**
   * 
   * @return expiresIn
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getExpiresIn() {
    return expiresIn;
  }

  public void setExpiresIn(Double expiresIn) {
    this.expiresIn = expiresIn;
  }

  public AccessToken accessToken(String accessToken) {
    this.accessToken = accessToken;
    return this;
  }

  /**
   * 
   * @return accessToken
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getAccessToken() {
    return accessToken;
  }

  public void setAccessToken(String accessToken) {
    this.accessToken = accessToken;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccessToken accessToken = (AccessToken) o;
    return Objects.equals(this.expiresIn, accessToken.expiresIn) &&
        Objects.equals(this.accessToken, accessToken.accessToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(expiresIn, accessToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccessToken {\n");
    
    sb.append("    expiresIn: ").append(toIndentedString(expiresIn)).append("\n");
    sb.append("    accessToken: ").append(toIndentedString(accessToken)).append("\n");
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

