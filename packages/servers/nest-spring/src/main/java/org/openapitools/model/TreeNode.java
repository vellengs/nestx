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
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class TreeNode   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("icon")
  private String icon;

  @JsonProperty("type")
  private String type;

  @JsonProperty("title")
  private String title;

  @JsonProperty("parent")
  private String parent;

  public TreeNode id(String id) {
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

  public TreeNode icon(String icon) {
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

  public TreeNode type(String type) {
    this.type = type;
    return this;
  }

  /**
   * 
   * @return type
  */
  @ApiModelProperty(value = "")


  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public TreeNode title(String title) {
    this.title = title;
    return this;
  }

  /**
   * 
   * @return title
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public TreeNode parent(String parent) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TreeNode treeNode = (TreeNode) o;
    return Objects.equals(this.id, treeNode.id) &&
        Objects.equals(this.icon, treeNode.icon) &&
        Objects.equals(this.type, treeNode.type) &&
        Objects.equals(this.title, treeNode.title) &&
        Objects.equals(this.parent, treeNode.parent);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, icon, type, title, parent);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TreeNode {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    icon: ").append(toIndentedString(icon)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
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

