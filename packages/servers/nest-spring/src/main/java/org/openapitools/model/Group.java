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

public class Group   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("outid")
  private Double outid;

  @JsonProperty("name")
  private String name;

  @JsonProperty("icon")
  private String icon;

  @JsonProperty("parent")
  private String parent;

  @JsonProperty("paths")
  @Valid
  private List<Object> paths = new ArrayList<>();

  @JsonProperty("director")
  private String director;

  @JsonProperty("order")
  private Double order;

  @JsonProperty("isRegion")
  private Boolean isRegion;

  @JsonProperty("description")
  private String description;

  public Group id(String id) {
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

  public Group outid(Double outid) {
    this.outid = outid;
    return this;
  }

  /**
   * 
   * @return outid
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getOutid() {
    return outid;
  }

  public void setOutid(Double outid) {
    this.outid = outid;
  }

  public Group name(String name) {
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

  public Group icon(String icon) {
    this.icon = icon;
    return this;
  }

  /**
   * 
   * @return icon
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getIcon() {
    return icon;
  }

  public void setIcon(String icon) {
    this.icon = icon;
  }

  public Group parent(String parent) {
    this.parent = parent;
    return this;
  }

  /**
   * 
   * @return parent
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getParent() {
    return parent;
  }

  public void setParent(String parent) {
    this.parent = parent;
  }

  public Group paths(List<Object> paths) {
    this.paths = paths;
    return this;
  }

  public Group addPathsItem(Object pathsItem) {
    this.paths.add(pathsItem);
    return this;
  }

  /**
   * 
   * @return paths
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public List<Object> getPaths() {
    return paths;
  }

  public void setPaths(List<Object> paths) {
    this.paths = paths;
  }

  public Group director(String director) {
    this.director = director;
    return this;
  }

  /**
   * 
   * @return director
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getDirector() {
    return director;
  }

  public void setDirector(String director) {
    this.director = director;
  }

  public Group order(Double order) {
    this.order = order;
    return this;
  }

  /**
   * 
   * @return order
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getOrder() {
    return order;
  }

  public void setOrder(Double order) {
    this.order = order;
  }

  public Group isRegion(Boolean isRegion) {
    this.isRegion = isRegion;
    return this;
  }

  /**
   * 
   * @return isRegion
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getIsRegion() {
    return isRegion;
  }

  public void setIsRegion(Boolean isRegion) {
    this.isRegion = isRegion;
  }

  public Group description(String description) {
    this.description = description;
    return this;
  }

  /**
   * 
   * @return description
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Group group = (Group) o;
    return Objects.equals(this.id, group.id) &&
        Objects.equals(this.outid, group.outid) &&
        Objects.equals(this.name, group.name) &&
        Objects.equals(this.icon, group.icon) &&
        Objects.equals(this.parent, group.parent) &&
        Objects.equals(this.paths, group.paths) &&
        Objects.equals(this.director, group.director) &&
        Objects.equals(this.order, group.order) &&
        Objects.equals(this.isRegion, group.isRegion) &&
        Objects.equals(this.description, group.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, outid, name, icon, parent, paths, director, order, isRegion, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Group {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    outid: ").append(toIndentedString(outid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    icon: ").append(toIndentedString(icon)).append("\n");
    sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
    sb.append("    paths: ").append(toIndentedString(paths)).append("\n");
    sb.append("    director: ").append(toIndentedString(director)).append("\n");
    sb.append("    order: ").append(toIndentedString(order)).append("\n");
    sb.append("    isRegion: ").append(toIndentedString(isRegion)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
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

