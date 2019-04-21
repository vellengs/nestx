package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.model.GroupedUsersResGroups;
import org.openapitools.model.GroupedUsersResUsers;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-04-21T15:04:16.680Z[Etc/UTC]")

public class GroupedUsersRes   {
  @JsonProperty("groups")
  @Valid
  private List<GroupedUsersResGroups> groups = new ArrayList<>();

  @JsonProperty("users")
  @Valid
  private List<GroupedUsersResUsers> users = new ArrayList<>();

  public GroupedUsersRes groups(List<GroupedUsersResGroups> groups) {
    this.groups = groups;
    return this;
  }

  public GroupedUsersRes addGroupsItem(GroupedUsersResGroups groupsItem) {
    this.groups.add(groupsItem);
    return this;
  }

  /**
   * 
   * @return groups
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public List<GroupedUsersResGroups> getGroups() {
    return groups;
  }

  public void setGroups(List<GroupedUsersResGroups> groups) {
    this.groups = groups;
  }

  public GroupedUsersRes users(List<GroupedUsersResUsers> users) {
    this.users = users;
    return this;
  }

  public GroupedUsersRes addUsersItem(GroupedUsersResUsers usersItem) {
    this.users.add(usersItem);
    return this;
  }

  /**
   * 
   * @return users
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public List<GroupedUsersResUsers> getUsers() {
    return users;
  }

  public void setUsers(List<GroupedUsersResUsers> users) {
    this.users = users;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GroupedUsersRes groupedUsersRes = (GroupedUsersRes) o;
    return Objects.equals(this.groups, groupedUsersRes.groups) &&
        Objects.equals(this.users, groupedUsersRes.users);
  }

  @Override
  public int hashCode() {
    return Objects.hash(groups, users);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupedUsersRes {\n");
    
    sb.append("    groups: ").append(toIndentedString(groups)).append("\n");
    sb.append("    users: ").append(toIndentedString(users)).append("\n");
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

