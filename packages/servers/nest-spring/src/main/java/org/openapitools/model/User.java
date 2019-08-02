package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class User   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("username")
  private String username;

  @JsonProperty("password")
  private String password;

  @JsonProperty("name")
  private String name;

  @JsonProperty("keyword")
  private String keyword;

  @JsonProperty("avatar")
  private String avatar;

  @JsonProperty("type")
  private String type;

  @JsonProperty("groups")
  @Valid
  private List<String> groups = new ArrayList<>();

  @JsonProperty("roles")
  @Valid
  private List<String> roles = new ArrayList<>();

  @JsonProperty("email")
  private String email;

  @JsonProperty("mobile")
  private String mobile;

  @JsonProperty("profile")
  private Object profile = null;

  @JsonProperty("isDisable")
  private Boolean isDisable;

  @JsonProperty("isAdmin")
  private Boolean isAdmin;

  @JsonProperty("isApproved")
  private Boolean isApproved;

  @JsonProperty("secret")
  private String secret;

  @JsonProperty("expired")
  private Double expired;

  public User id(String id) {
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

  public User username(String username) {
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

  public User password(String password) {
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

  public User name(String name) {
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

  public User keyword(String keyword) {
    this.keyword = keyword;
    return this;
  }

  /**
   * 
   * @return keyword
  */
  @ApiModelProperty(value = "")


  public String getKeyword() {
    return keyword;
  }

  public void setKeyword(String keyword) {
    this.keyword = keyword;
  }

  public User avatar(String avatar) {
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

  public User type(String type) {
    this.type = type;
    return this;
  }

  /**
   * 
   * @return type
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public User groups(List<String> groups) {
    this.groups = groups;
    return this;
  }

  public User addGroupsItem(String groupsItem) {
    this.groups.add(groupsItem);
    return this;
  }

  /**
   * 
   * @return groups
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public List<String> getGroups() {
    return groups;
  }

  public void setGroups(List<String> groups) {
    this.groups = groups;
  }

  public User roles(List<String> roles) {
    this.roles = roles;
    return this;
  }

  public User addRolesItem(String rolesItem) {
    this.roles.add(rolesItem);
    return this;
  }

  /**
   * 
   * @return roles
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public List<String> getRoles() {
    return roles;
  }

  public void setRoles(List<String> roles) {
    this.roles = roles;
  }

  public User email(String email) {
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

  public User mobile(String mobile) {
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

  public User profile(Object profile) {
    this.profile = profile;
    return this;
  }

  /**
   * 
   * @return profile
  */
  @ApiModelProperty(value = "")

  @Valid

  public Object getProfile() {
    return profile;
  }

  public void setProfile(Object profile) {
    this.profile = profile;
  }

  public User isDisable(Boolean isDisable) {
    this.isDisable = isDisable;
    return this;
  }

  /**
   * 
   * @return isDisable
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getIsDisable() {
    return isDisable;
  }

  public void setIsDisable(Boolean isDisable) {
    this.isDisable = isDisable;
  }

  public User isAdmin(Boolean isAdmin) {
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

  public User isApproved(Boolean isApproved) {
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

  public User secret(String secret) {
    this.secret = secret;
    return this;
  }

  /**
   * 
   * @return secret
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getSecret() {
    return secret;
  }

  public void setSecret(String secret) {
    this.secret = secret;
  }

  public User expired(Double expired) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return Objects.equals(this.id, user.id) &&
        Objects.equals(this.username, user.username) &&
        Objects.equals(this.password, user.password) &&
        Objects.equals(this.name, user.name) &&
        Objects.equals(this.keyword, user.keyword) &&
        Objects.equals(this.avatar, user.avatar) &&
        Objects.equals(this.type, user.type) &&
        Objects.equals(this.groups, user.groups) &&
        Objects.equals(this.roles, user.roles) &&
        Objects.equals(this.email, user.email) &&
        Objects.equals(this.mobile, user.mobile) &&
        Objects.equals(this.profile, user.profile) &&
        Objects.equals(this.isDisable, user.isDisable) &&
        Objects.equals(this.isAdmin, user.isAdmin) &&
        Objects.equals(this.isApproved, user.isApproved) &&
        Objects.equals(this.secret, user.secret) &&
        Objects.equals(this.expired, user.expired);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, username, password, name, keyword, avatar, type, groups, roles, email, mobile, profile, isDisable, isAdmin, isApproved, secret, expired);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class User {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    keyword: ").append(toIndentedString(keyword)).append("\n");
    sb.append("    avatar: ").append(toIndentedString(avatar)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    groups: ").append(toIndentedString(groups)).append("\n");
    sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    mobile: ").append(toIndentedString(mobile)).append("\n");
    sb.append("    profile: ").append(toIndentedString(profile)).append("\n");
    sb.append("    isDisable: ").append(toIndentedString(isDisable)).append("\n");
    sb.append("    isAdmin: ").append(toIndentedString(isAdmin)).append("\n");
    sb.append("    isApproved: ").append(toIndentedString(isApproved)).append("\n");
    sb.append("    secret: ").append(toIndentedString(secret)).append("\n");
    sb.append("    expired: ").append(toIndentedString(expired)).append("\n");
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

