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

public class UserRes   {
  @JsonProperty("id")
  private String id;

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

  @JsonProperty("roles")
  @Valid
  private List<String> roles = null;

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

  public UserRes id(String id) {
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

  public UserRes username(String username) {
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

  public UserRes avatar(String avatar) {
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

  public UserRes email(String email) {
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

  public UserRes name(String name) {
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

  public UserRes mobile(String mobile) {
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

  public UserRes roles(List<String> roles) {
    this.roles = roles;
    return this;
  }

  public UserRes addRolesItem(String rolesItem) {
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

  public UserRes isAdmin(Boolean isAdmin) {
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

  public UserRes isApproved(Boolean isApproved) {
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

  public UserRes expired(Double expired) {
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

  public UserRes company(String company) {
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

  public UserRes siteUrl(String siteUrl) {
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

  public UserRes address(String address) {
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
    UserRes userRes = (UserRes) o;
    return Objects.equals(this.id, userRes.id) &&
        Objects.equals(this.username, userRes.username) &&
        Objects.equals(this.avatar, userRes.avatar) &&
        Objects.equals(this.email, userRes.email) &&
        Objects.equals(this.name, userRes.name) &&
        Objects.equals(this.mobile, userRes.mobile) &&
        Objects.equals(this.roles, userRes.roles) &&
        Objects.equals(this.isAdmin, userRes.isAdmin) &&
        Objects.equals(this.isApproved, userRes.isApproved) &&
        Objects.equals(this.expired, userRes.expired) &&
        Objects.equals(this.company, userRes.company) &&
        Objects.equals(this.siteUrl, userRes.siteUrl) &&
        Objects.equals(this.address, userRes.address);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, username, avatar, email, name, mobile, roles, isAdmin, isApproved, expired, company, siteUrl, address);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserRes {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    avatar: ").append(toIndentedString(avatar)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    mobile: ").append(toIndentedString(mobile)).append("\n");
    sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
    sb.append("    isAdmin: ").append(toIndentedString(isAdmin)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    expired: ").append(toIndentedString(expired)).append("\n");
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

