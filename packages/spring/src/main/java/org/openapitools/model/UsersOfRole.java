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

public class UsersOfRole   {
  @JsonProperty("role")
  private String role;

  @JsonProperty("userIds")
  @Valid
  private List<String> userIds = new ArrayList<>();

  public UsersOfRole role(String role) {
    this.role = role;
    return this;
  }

  /**
   * 
   * @return role
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public UsersOfRole userIds(List<String> userIds) {
    this.userIds = userIds;
    return this;
  }

  public UsersOfRole addUserIdsItem(String userIdsItem) {
    this.userIds.add(userIdsItem);
    return this;
  }

  /**
   * 
   * @return userIds
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public List<String> getUserIds() {
    return userIds;
  }

  public void setUserIds(List<String> userIds) {
    this.userIds = userIds;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UsersOfRole usersOfRole = (UsersOfRole) o;
    return Objects.equals(this.role, usersOfRole.role) &&
        Objects.equals(this.userIds, usersOfRole.userIds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(role, userIds);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UsersOfRole {\n");
    
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    userIds: ").append(toIndentedString(userIds)).append("\n");
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

