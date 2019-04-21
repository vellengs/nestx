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

public class EditProfileReq   {
  @JsonProperty("name")
  private String name;

  @JsonProperty("mobile")
  private String mobile;

  @JsonProperty("password")
  private String password;

  @JsonProperty("email")
  private String email;

  @JsonProperty("company")
  private String company;

  @JsonProperty("siteUrl")
  private String siteUrl;

  @JsonProperty("address")
  private String address;

  public EditProfileReq name(String name) {
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

  public EditProfileReq mobile(String mobile) {
    this.mobile = mobile;
    return this;
  }

  /**
   * 
   * @return mobile
  */
  @ApiModelProperty(value = "")


  public String getMobile() {
    return mobile;
  }

  public void setMobile(String mobile) {
    this.mobile = mobile;
  }

  public EditProfileReq password(String password) {
    this.password = password;
    return this;
  }

  /**
   * 
   * @return password
  */
  @ApiModelProperty(value = "")


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public EditProfileReq email(String email) {
    this.email = email;
    return this;
  }

  /**
   * 
   * @return email
  */
  @ApiModelProperty(value = "")


  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public EditProfileReq company(String company) {
    this.company = company;
    return this;
  }

  /**
   * 
   * @return company
  */
  @ApiModelProperty(value = "")


  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  public EditProfileReq siteUrl(String siteUrl) {
    this.siteUrl = siteUrl;
    return this;
  }

  /**
   * 
   * @return siteUrl
  */
  @ApiModelProperty(value = "")


  public String getSiteUrl() {
    return siteUrl;
  }

  public void setSiteUrl(String siteUrl) {
    this.siteUrl = siteUrl;
  }

  public EditProfileReq address(String address) {
    this.address = address;
    return this;
  }

  /**
   * 
   * @return address
  */
  @ApiModelProperty(value = "")


  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EditProfileReq editProfileReq = (EditProfileReq) o;
    return Objects.equals(this.name, editProfileReq.name) &&
        Objects.equals(this.mobile, editProfileReq.mobile) &&
        Objects.equals(this.password, editProfileReq.password) &&
        Objects.equals(this.email, editProfileReq.email) &&
        Objects.equals(this.company, editProfileReq.company) &&
        Objects.equals(this.siteUrl, editProfileReq.siteUrl) &&
        Objects.equals(this.address, editProfileReq.address);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, mobile, password, email, company, siteUrl, address);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditProfileReq {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    mobile: ").append(toIndentedString(mobile)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    siteUrl: ").append(toIndentedString(siteUrl)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
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

