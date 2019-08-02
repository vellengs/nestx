package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.model.AccessToken;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class LoginRes   {
  @JsonProperty("username")
  private String username;

  @JsonProperty("avatar")
  private String avatar;

  @JsonProperty("email")
  private String email;

  @JsonProperty("name")
  private String name;

  @JsonProperty("mobile")
  private String mobile;

  @JsonProperty("isAdmin")
  private Boolean isAdmin;

  @JsonProperty("isApproved")
  private Boolean isApproved;

  @JsonProperty("expired")
  private Double expired;

  @JsonProperty("company")
  private String company;

  @JsonProperty("siteUrl")
  private String siteUrl;

  @JsonProperty("address")
  private String address;

  @JsonProperty("token")
  private AccessToken token = null;

  @JsonProperty("roles")
  @Valid
  private List<String> roles = null;

  public LoginRes username(String username) {
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

  public LoginRes avatar(String avatar) {
    this.avatar = avatar;
    return this;
  }

  /**
   * 
   * @return avatar
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getAvatar() {
    return avatar;
  }

  public void setAvatar(String avatar) {
    this.avatar = avatar;
  }

  public LoginRes email(String email) {
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

  public LoginRes name(String name) {
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

  public LoginRes mobile(String mobile) {
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

  public LoginRes isAdmin(Boolean isAdmin) {
    this.isAdmin = isAdmin;
    return this;
  }

  /**
   * 
   * @return isAdmin
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getIsAdmin() {
    return isAdmin;
  }

  public void setIsAdmin(Boolean isAdmin) {
    this.isAdmin = isAdmin;
  }

  public LoginRes isApproved(Boolean isApproved) {
    this.isApproved = isApproved;
    return this;
  }

  /**
   * 
   * @return isApproved
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getIsApproved() {
    return isApproved;
  }

  public void setIsApproved(Boolean isApproved) {
    this.isApproved = isApproved;
  }

  public LoginRes expired(Double expired) {
    this.expired = expired;
    return this;
  }

  /**
   * 
   * @return expired
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getExpired() {
    return expired;
  }

  public void setExpired(Double expired) {
    this.expired = expired;
  }

  public LoginRes company(String company) {
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

  public LoginRes siteUrl(String siteUrl) {
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

  public LoginRes address(String address) {
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

  public LoginRes token(AccessToken token) {
    this.token = token;
    return this;
  }

  /**
   * Get token
   * @return token
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public AccessToken getToken() {
    return token;
  }

  public void setToken(AccessToken token) {
    this.token = token;
  }

  public LoginRes roles(List<String> roles) {
    this.roles = roles;
    return this;
  }

  public LoginRes addRolesItem(String rolesItem) {
    if (this.roles == null) {
      this.roles = new ArrayList<>();
    }
    this.roles.add(rolesItem);
    return this;
  }

  /**
   * 
   * @return roles
  */
  @ApiModelProperty(value = "")


  public List<String> getRoles() {
    return roles;
  }

  public void setRoles(List<String> roles) {
    this.roles = roles;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LoginRes loginRes = (LoginRes) o;
    return Objects.equals(this.username, loginRes.username) &&
        Objects.equals(this.avatar, loginRes.avatar) &&
        Objects.equals(this.email, loginRes.email) &&
        Objects.equals(this.name, loginRes.name) &&
        Objects.equals(this.mobile, loginRes.mobile) &&
        Objects.equals(this.isAdmin, loginRes.isAdmin) &&
        Objects.equals(this.isApproved, loginRes.isApproved) &&
        Objects.equals(this.expired, loginRes.expired) &&
        Objects.equals(this.company, loginRes.company) &&
        Objects.equals(this.siteUrl, loginRes.siteUrl) &&
        Objects.equals(this.address, loginRes.address) &&
        Objects.equals(this.token, loginRes.token) &&
        Objects.equals(this.roles, loginRes.roles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(username, avatar, email, name, mobile, isAdmin, isApproved, expired, company, siteUrl, address, token, roles);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LoginRes {\n");
    
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    avatar: ").append(toIndentedString(avatar)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    mobile: ").append(toIndentedString(mobile)).append("\n");
    sb.append("    isAdmin: ").append(toIndentedString(isAdmin)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    expired: ").append(toIndentedString(expired)).append("\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    siteUrl: ").append(toIndentedString(siteUrl)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    token: ").append(toIndentedString(token)).append("\n");
    sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
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

