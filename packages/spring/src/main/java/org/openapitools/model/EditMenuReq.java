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

public class EditMenuReq   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("name")
  private String name;

  @JsonProperty("slug")
  private String slug;

  @JsonProperty("group")
  private Boolean group;

  @JsonProperty("link")
  private String link;

  @JsonProperty("order")
  private Double order;

  @JsonProperty("externalLink")
  private String externalLink;

  @JsonProperty("blank")
  private Boolean blank;

  @JsonProperty("icon")
  private String icon;

  @JsonProperty("badge")
  private String badge;

  @JsonProperty("badgeDot")
  private String badgeDot;

  @JsonProperty("badgeStatus")
  private String badgeStatus;

  @JsonProperty("enable")
  private Boolean enable;

  @JsonProperty("expanded")
  private Boolean expanded;

  @JsonProperty("acl")
  private String acl;

  @JsonProperty("paths")
  @Valid
  private List<Object> paths = null;

  @JsonProperty("parent")
  private String parent;

  @JsonProperty("permissions")
  @Valid
  private List<Object> permissions = null;

  @JsonProperty("isMenu")
  private Boolean isMenu;

  public EditMenuReq id(String id) {
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

  public EditMenuReq name(String name) {
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

  public EditMenuReq slug(String slug) {
    this.slug = slug;
    return this;
  }

  /**
   * 
   * @return slug
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getSlug() {
    return slug;
  }

  public void setSlug(String slug) {
    this.slug = slug;
  }

  public EditMenuReq group(Boolean group) {
    this.group = group;
    return this;
  }

  /**
   * 
   * @return group
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getGroup() {
    return group;
  }

  public void setGroup(Boolean group) {
    this.group = group;
  }

  public EditMenuReq link(String link) {
    this.link = link;
    return this;
  }

  /**
   * 
   * @return link
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }

  public EditMenuReq order(Double order) {
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

  public EditMenuReq externalLink(String externalLink) {
    this.externalLink = externalLink;
    return this;
  }

  /**
   * 
   * @return externalLink
  */
  @ApiModelProperty(value = "")


  public String getExternalLink() {
    return externalLink;
  }

  public void setExternalLink(String externalLink) {
    this.externalLink = externalLink;
  }

  public EditMenuReq blank(Boolean blank) {
    this.blank = blank;
    return this;
  }

  /**
   * 
   * @return blank
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getBlank() {
    return blank;
  }

  public void setBlank(Boolean blank) {
    this.blank = blank;
  }

  public EditMenuReq icon(String icon) {
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

  public EditMenuReq badge(String badge) {
    this.badge = badge;
    return this;
  }

  /**
   * 
   * @return badge
  */
  @ApiModelProperty(value = "")


  public String getBadge() {
    return badge;
  }

  public void setBadge(String badge) {
    this.badge = badge;
  }

  public EditMenuReq badgeDot(String badgeDot) {
    this.badgeDot = badgeDot;
    return this;
  }

  /**
   * 
   * @return badgeDot
  */
  @ApiModelProperty(value = "")


  public String getBadgeDot() {
    return badgeDot;
  }

  public void setBadgeDot(String badgeDot) {
    this.badgeDot = badgeDot;
  }

  public EditMenuReq badgeStatus(String badgeStatus) {
    this.badgeStatus = badgeStatus;
    return this;
  }

  /**
   * 
   * @return badgeStatus
  */
  @ApiModelProperty(value = "")


  public String getBadgeStatus() {
    return badgeStatus;
  }

  public void setBadgeStatus(String badgeStatus) {
    this.badgeStatus = badgeStatus;
  }

  public EditMenuReq enable(Boolean enable) {
    this.enable = enable;
    return this;
  }

  /**
   * 
   * @return enable
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getEnable() {
    return enable;
  }

  public void setEnable(Boolean enable) {
    this.enable = enable;
  }

  public EditMenuReq expanded(Boolean expanded) {
    this.expanded = expanded;
    return this;
  }

  /**
   * 
   * @return expanded
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getExpanded() {
    return expanded;
  }

  public void setExpanded(Boolean expanded) {
    this.expanded = expanded;
  }

  public EditMenuReq acl(String acl) {
    this.acl = acl;
    return this;
  }

  /**
   * 
   * @return acl
  */
  @ApiModelProperty(value = "")


  public String getAcl() {
    return acl;
  }

  public void setAcl(String acl) {
    this.acl = acl;
  }

  public EditMenuReq paths(List<Object> paths) {
    this.paths = paths;
    return this;
  }

  public EditMenuReq addPathsItem(Object pathsItem) {
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

  public EditMenuReq parent(String parent) {
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

  public EditMenuReq permissions(List<Object> permissions) {
    this.permissions = permissions;
    return this;
  }

  public EditMenuReq addPermissionsItem(Object permissionsItem) {
    if (this.permissions == null) {
      this.permissions = new ArrayList<>();
    }
    this.permissions.add(permissionsItem);
    return this;
  }

  /**
   * 
   * @return permissions
  */
  @ApiModelProperty(value = "")


  public List<Object> getPermissions() {
    return permissions;
  }

  public void setPermissions(List<Object> permissions) {
    this.permissions = permissions;
  }

  public EditMenuReq isMenu(Boolean isMenu) {
    this.isMenu = isMenu;
    return this;
  }

  /**
   * 
   * @return isMenu
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Boolean getIsMenu() {
    return isMenu;
  }

  public void setIsMenu(Boolean isMenu) {
    this.isMenu = isMenu;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EditMenuReq editMenuReq = (EditMenuReq) o;
    return Objects.equals(this.id, editMenuReq.id) &&
        Objects.equals(this.name, editMenuReq.name) &&
        Objects.equals(this.slug, editMenuReq.slug) &&
        Objects.equals(this.group, editMenuReq.group) &&
        Objects.equals(this.link, editMenuReq.link) &&
        Objects.equals(this.order, editMenuReq.order) &&
        Objects.equals(this.externalLink, editMenuReq.externalLink) &&
        Objects.equals(this.blank, editMenuReq.blank) &&
        Objects.equals(this.icon, editMenuReq.icon) &&
        Objects.equals(this.badge, editMenuReq.badge) &&
        Objects.equals(this.badgeDot, editMenuReq.badgeDot) &&
        Objects.equals(this.badgeStatus, editMenuReq.badgeStatus) &&
        Objects.equals(this.enable, editMenuReq.enable) &&
        Objects.equals(this.expanded, editMenuReq.expanded) &&
        Objects.equals(this.acl, editMenuReq.acl) &&
        Objects.equals(this.paths, editMenuReq.paths) &&
        Objects.equals(this.parent, editMenuReq.parent) &&
        Objects.equals(this.permissions, editMenuReq.permissions) &&
        Objects.equals(this.isMenu, editMenuReq.isMenu);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, slug, group, link, order, externalLink, blank, icon, badge, badgeDot, badgeStatus, enable, expanded, acl, paths, parent, permissions, isMenu);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EditMenuReq {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    slug: ").append(toIndentedString(slug)).append("\n");
    sb.append("    group: ").append(toIndentedString(group)).append("\n");
    sb.append("    link: ").append(toIndentedString(link)).append("\n");
    sb.append("    order: ").append(toIndentedString(order)).append("\n");
    sb.append("    externalLink: ").append(toIndentedString(externalLink)).append("\n");
    sb.append("    blank: ").append(toIndentedString(blank)).append("\n");
    sb.append("    icon: ").append(toIndentedString(icon)).append("\n");
    sb.append("    badge: ").append(toIndentedString(badge)).append("\n");
    sb.append("    badgeDot: ").append(toIndentedString(badgeDot)).append("\n");
    sb.append("    badgeStatus: ").append(toIndentedString(badgeStatus)).append("\n");
    sb.append("    enable: ").append(toIndentedString(enable)).append("\n");
    sb.append("    expanded: ").append(toIndentedString(expanded)).append("\n");
    sb.append("    acl: ").append(toIndentedString(acl)).append("\n");
    sb.append("    paths: ").append(toIndentedString(paths)).append("\n");
    sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
    sb.append("    permissions: ").append(toIndentedString(permissions)).append("\n");
    sb.append("    isMenu: ").append(toIndentedString(isMenu)).append("\n");
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

