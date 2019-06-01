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
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-05-14T08:00:41.276Z[Etc/UTC]")

public class CreateUserReq   {
  @JsonProperty("username")
  private String username;

  @JsonProperty("password")
  private String password;

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

  @JsonProperty("isDisable")
  private Boolean isDisable;

  @JsonProperty("expired")
  private Double expired;

  @JsonProperty("company")
  private String company;

  @JsonProperty("siteUrl")
  private String siteUrl;

  @JsonProperty("address")
  private String address;

  @JsonProperty("groups")
  @Valid
  private List<String> groups = null;

  @JsonProperty("roles")
  @Valid
  private List<String> roles = null;

  public CreateUserReq username(String username) {
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

  public CreateUserReq password(String password) {
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

  public CreateUserReq avatar(String avatar) {
    this.avatar = avatar;
    return this;
  }

  /**
   * 
   * @return avatar
  */
  @ApiModelProperty(value = "")


  public String getAvatar() {
    return avatar;
  }

  public void setAvatar(String avatar) {
    this.avatar = avatar;
  }

  public CreateUserReq email(String email) {
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

  public CreateUserReq name(String name) {
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

  public CreateUserReq mobile(String mobile) {
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

  public CreateUserReq isAdmin(Boolean isAdmin) {
    this.isAdmin = isAdmin;
    return this;
  }

  /**
   * 
   * @return isAdmin
  */
  @ApiModelProperty(value = "")


  public Boolean getIsAdmin() {
    return isAdmin;
  }

  public void setIsAdmin(Boolean isAdmin) {
    this.isAdmin = isAdmin;
  }

  public CreateUserReq isApproved(Boolean isApproved) {
    this.isApproved = isApproved;
    return this;
  }

  /**
   * 
   * @return isApproved
  */
  @ApiModelProperty(value = "")


  public Boolean getIsApproved() {
    return isApproved;
  }

  public void setIsApproved(Boolean isApproved) {
    this.isApproved = isApproved;
  }

  public CreateUserReq isDisable(Boolean isDisable) {
    this.isDisable = isDisable;
    return this;
  }

  /**
   * 
   * @return isDisable
  */
  @ApiModelProperty(value = "")


  public Boolean getIsDisable() {
    return isDisable;
  }

  public void setIsDisable(Boolean isDisable) {
    this.isDisable = isDisable;
  }

  public CreateUserReq expired(Double expired) {
    this.expired = expired;
    return this;
  }

  /**
   * 
   * @return expired
  */
  @ApiModelProperty(value = "")


  public Double getExpired() {
    return expired;
  }

  public void setExpired(Double expired) {
    this.expired = expired;
  }

  public CreateUserReq company(String company) {
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

  public CreateUserReq siteUrl(String siteUrl) {
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

  public CreateUserReq address(String address) {
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

  public CreateUserReq groups(List<String> groups) {
    this.groups = groups;
    return this;
  }

  public CreateUserReq addGroupsItem(String groupsItem) {
    if (this.groups == null) {
      this.groups = new ArrayList<>();
    }
    this.groups.add(groupsItem);
    return this;
  }

  /**
   * 
   * @return groups
  */
  @ApiModelProperty(value = "")


  public List<String> getGroups() {
    return groups;
  }

  public void setGroups(List<String> groups) {
    this.groups = groups;
  }

  public CreateUserReq roles(List<String> roles) {
    this.roles = roles;
    return this;
  }

  public CreateUserReq addRolesItem(String rolesItem) {
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
    CreateUserReq createUserReq = (CreateUserReq) o;
    return Objects.equals(this.username, createUserReq.username) &&
        Objects.equals(this.password, createUserReq.password) &&
        Objects.equals(this.avatar, createUserReq.avatar) &&
        Objects.equals(this.email, createUserReq.email) &&
        Objects.equals(this.name, createUserReq.name) &&
        Objects.equals(this.mobile, createUserReq.mobile) &&
        Objects.equals(this.isAdmin, createUserReq.isAdmin) &&
        Objects.equals(this.isApproved, createUserReq.isApproved) &&
        Objects.equals(this.isDisable, createUserReq.isDisable) &&
        Objects.equals(this.expired, createUserReq.expired) &&
        Objects.equals(this.company, createUserReq.company) &&
        Objects.equals(this.siteUrl, createUserReq.siteUrl) &&
        Objects.equals(this.address, createUserReq.address) &&
        Objects.equals(this.groups, createUserReq.groups) &&
        Objects.equals(this.roles, createUserReq.roles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(username, password, avatar, email, name, mobile, isAdmin, isApproved, isDisable, expired, company, siteUrl, address, groups, roles);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateUserReq {\n");
    
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    avatar: ").append(toIndentedString(avatar)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    mobile: ").append(toIndentedString(mobile)).append("\n");
    sb.append("    isAdmin: ").append(toIndentedString(isAdmin)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    isDisable: ").append(toIndentedString(isDisable)).append("\n");
    sb.append("    expired: ").append(toIndentedString(expired)).append("\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    siteUrl: ").append(toIndentedString(siteUrl)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    groups: ").append(toIndentedString(groups)).append("\n");
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

