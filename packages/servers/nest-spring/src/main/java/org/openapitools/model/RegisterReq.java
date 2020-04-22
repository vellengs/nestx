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

public class RegisterReq   {
  @JsonProperty("username")
  private String username;

  @JsonProperty("password")
  private String password;

  @JsonProperty("mobile")
  private String mobile;

  @JsonProperty("email")
  private String email;

  @JsonProperty("name")
  private String name;

  @JsonProperty("mobilePrefix")
  private String mobilePrefix;

  @JsonProperty("veryCode")
  private String veryCode;

  public RegisterReq username(String username) {
    this.username = username;
    return this;
  }

  /**
   * 
   * @return username
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public RegisterReq password(String password) {
    this.password = password;
    return this;
  }

  /**
   * 
   * @return password
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public RegisterReq mobile(String mobile) {
    this.mobile = mobile;
    return this;
  }

  /**
   * 
   * @return mobile
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getMobile() {
    return mobile;
  }

  public void setMobile(String mobile) {
    this.mobile = mobile;
  }

  public RegisterReq email(String email) {
    this.email = email;
    return this;
  }

  /**
   * 
   * @return email
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public RegisterReq name(String name) {
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

  public RegisterReq mobilePrefix(String mobilePrefix) {
    this.mobilePrefix = mobilePrefix;
    return this;
  }

  /**
   * 
   * @return mobilePrefix
  */
  @ApiModelProperty(value = "")


  public String getMobilePrefix() {
    return mobilePrefix;
  }

  public void setMobilePrefix(String mobilePrefix) {
    this.mobilePrefix = mobilePrefix;
  }

  public RegisterReq veryCode(String veryCode) {
    this.veryCode = veryCode;
    return this;
  }

  /**
   * 
   * @return veryCode
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getVeryCode() {
    return veryCode;
  }

  public void setVeryCode(String veryCode) {
    this.veryCode = veryCode;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RegisterReq registerReq = (RegisterReq) o;
    return Objects.equals(this.username, registerReq.username) &&
        Objects.equals(this.password, registerReq.password) &&
        Objects.equals(this.mobile, registerReq.mobile) &&
        Objects.equals(this.email, registerReq.email) &&
        Objects.equals(this.name, registerReq.name) &&
        Objects.equals(this.mobilePrefix, registerReq.mobilePrefix) &&
        Objects.equals(this.veryCode, registerReq.veryCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(username, password, mobile, email, name, mobilePrefix, veryCode);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RegisterReq {\n");
    
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    mobile: ").append(toIndentedString(mobile)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    mobilePrefix: ").append(toIndentedString(mobilePrefix)).append("\n");
    sb.append("    veryCode: ").append(toIndentedString(veryCode)).append("\n");
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

