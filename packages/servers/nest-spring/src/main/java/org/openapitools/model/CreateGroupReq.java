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

public class CreateGroupReq   {
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
  private List<Object> paths = null;

  @JsonProperty("director")
  private String director;

  @JsonProperty("order")
  private Double order;

  @JsonProperty("isRegion")
  private Boolean isRegion;

  @JsonProperty("description")
  private String description;

  public CreateGroupReq outid(Double outid) {
    this.outid = outid;
    return this;
  }

  /**
   * 
   * @return outid
  */
  @ApiModelProperty(value = "")


  public Double getOutid() {
    return outid;
  }

  public void setOutid(Double outid) {
    this.outid = outid;
  }

  public CreateGroupReq name(String name) {
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

  public CreateGroupReq icon(String icon) {
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

  public CreateGroupReq parent(String parent) {
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

  public CreateGroupReq paths(List<Object> paths) {
    this.paths = paths;
    return this;
  }

  public CreateGroupReq addPathsItem(Object pathsItem) {
    if (this.paths == null) {
      this.paths = new ArrayList<>();
    }
    this.paths.add(pathsItem);
    return this;
  }

  /**
   * 
   * @return paths
  */
  @ApiModelProperty(value = "")


  public List<Object> getPaths() {
    return paths;
  }

  public void setPaths(List<Object> paths) {
    this.paths = paths;
  }

  public CreateGroupReq director(String director) {
    this.director = director;
    return this;
  }

  /**
   * 
   * @return director
  */
  @ApiModelProperty(value = "")


  public String getDirector() {
    return director;
  }

  public void setDirector(String director) {
    this.director = director;
  }

  public CreateGroupReq order(Double order) {
    this.order = order;
    return this;
  }

  /**
   * 
   * @return order
  */
  @ApiModelProperty(value = "")


  public Double getOrder() {
    return order;
  }

  public void setOrder(Double order) {
    this.order = order;
  }

  public CreateGroupReq isRegion(Boolean isRegion) {
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

  public CreateGroupReq description(String description) {
    this.description = description;
    return this;
  }

  /**
   * 
   * @return description
  */
  @ApiModelProperty(value = "")


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
    CreateGroupReq createGroupReq = (CreateGroupReq) o;
    return Objects.equals(this.outid, createGroupReq.outid) &&
        Objects.equals(this.name, createGroupReq.name) &&
        Objects.equals(this.icon, createGroupReq.icon) &&
        Objects.equals(this.parent, createGroupReq.parent) &&
        Objects.equals(this.paths, createGroupReq.paths) &&
        Objects.equals(this.director, createGroupReq.director) &&
        Objects.equals(this.order, createGroupReq.order) &&
        Objects.equals(this.isRegion, createGroupReq.isRegion) &&
        Objects.equals(this.description, createGroupReq.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(outid, name, icon, parent, paths, director, order, isRegion, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateGroupReq {\n");
    
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

