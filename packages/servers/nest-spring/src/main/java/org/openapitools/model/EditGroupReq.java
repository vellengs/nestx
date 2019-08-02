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

public class EditGroupReq   {
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
  private List<Object> paths = null;

  @JsonProperty("director")
  private String director;

  @JsonProperty("order")
  private Double order;

  @JsonProperty("isRegion")
  private Boolean isRegion;

  @JsonProperty("description")
  private String description;

  public EditGroupReq id(String id) {
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

  public EditGroupReq outid(Double outid) {
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

  public EditGroupReq name(String name) {
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

  public EditGroupReq icon(String icon) {
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

  public EditGroupReq parent(String parent) {
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

  public EditGroupReq paths(List<Object> paths) {
    this.paths = paths;
    return this;
  }

  public EditGroupReq addPathsItem(Object pathsItem) {
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

  public EditGroupReq director(String director) {
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

  public EditGroupReq order(Double order) {
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

  public EditGroupReq isRegion(Boolean isRegion) {
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

  public EditGroupReq description(String description) {
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
    EditGroupReq editGroupReq = (EditGroupReq) o;
    return Objects.equals(this.id, editGroupReq.id) &&
        Objects.equals(this.outid, editGroupReq.outid) &&
        Objects.equals(this.name, editGroupReq.name) &&
        Objects.equals(this.icon, editGroupReq.icon) &&
        Objects.equals(this.parent, editGroupReq.parent) &&
        Objects.equals(this.paths, editGroupReq.paths) &&
        Objects.equals(this.director, editGroupReq.director) &&
        Objects.equals(this.order, editGroupReq.order) &&
        Objects.equals(this.isRegion, editGroupReq.isRegion) &&
        Objects.equals(this.description, editGroupReq.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, outid, name, icon, parent, paths, director, order, isRegion, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditGroupReq {\n");
    
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

