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
 * GroupedUsersResUsers
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class GroupedUsersResUsers   {
  @JsonProperty("name")
  private String name;

  @JsonProperty("groups")
  @Valid
  private List<String> groups = null;

  @JsonProperty("id")
  private String id;

  public GroupedUsersResUsers name(String name) {
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

  public GroupedUsersResUsers groups(List<String> groups) {
    this.groups = groups;
    return this;
  }

  public GroupedUsersResUsers addGroupsItem(String groupsItem) {
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

  public GroupedUsersResUsers id(String id) {
    this.id = id;
    return this;
  }

  /**
   * 
   * @return id
  */
  @ApiModelProperty(value = "")


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GroupedUsersResUsers groupedUsersResUsers = (GroupedUsersResUsers) o;
    return Objects.equals(this.name, groupedUsersResUsers.name) &&
        Objects.equals(this.groups, groupedUsersResUsers.groups) &&
        Objects.equals(this.id, groupedUsersResUsers.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, groups, id);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupedUsersResUsers {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    groups: ").append(toIndentedString(groups)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
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

