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
 * GroupedUsersResGroups
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class GroupedUsersResGroups   {
  @JsonProperty("parent")
  private String parent;

  @JsonProperty("name")
  private String name;

  @JsonProperty("icon")
  private String icon;

  @JsonProperty("id")
  private String id;

  @JsonProperty("isRegion")
  private Boolean isRegion;

  public GroupedUsersResGroups parent(String parent) {
    this.parent = parent;
    return this;
  }

  /**
   * 
   * @return parent
  */
  @ApiModelProperty(value = "")


  public String getParent() {
    return parent;
  }

  public void setParent(String parent) {
    this.parent = parent;
  }

  public GroupedUsersResGroups name(String name) {
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

  public GroupedUsersResGroups icon(String icon) {
    this.icon = icon;
    return this;
  }

  /**
   * 
   * @return icon
  */
  @ApiModelProperty(value = "")


  public String getIcon() {
    return icon;
  }

  public void setIcon(String icon) {
    this.icon = icon;
  }

  public GroupedUsersResGroups id(String id) {
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

  public GroupedUsersResGroups isRegion(Boolean isRegion) {
    this.isRegion = isRegion;
    return this;
  }

  /**
   * 
   * @return isRegion
  */
  @ApiModelProperty(value = "")


  public Boolean getIsRegion() {
    return isRegion;
  }

  public void setIsRegion(Boolean isRegion) {
    this.isRegion = isRegion;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GroupedUsersResGroups groupedUsersResGroups = (GroupedUsersResGroups) o;
    return Objects.equals(this.parent, groupedUsersResGroups.parent) &&
        Objects.equals(this.name, groupedUsersResGroups.name) &&
        Objects.equals(this.icon, groupedUsersResGroups.icon) &&
        Objects.equals(this.id, groupedUsersResGroups.id) &&
        Objects.equals(this.isRegion, groupedUsersResGroups.isRegion);
  }

  @Override
  public int hashCode() {
    return Objects.hash(parent, name, icon, id, isRegion);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GroupedUsersResGroups {\n");
    
    sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    icon: ").append(toIndentedString(icon)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isRegion: ").append(toIndentedString(isRegion)).append("\n");
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

