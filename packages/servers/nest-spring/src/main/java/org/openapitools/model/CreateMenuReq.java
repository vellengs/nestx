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
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-05-14T08:00:41.276Z[Etc/UTC]")

public class CreateMenuReq   {
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

  public CreateMenuReq name(String name) {
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

  public CreateMenuReq slug(String slug) {
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

  public CreateMenuReq group(Boolean group) {
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

  public CreateMenuReq link(String link) {
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

  public CreateMenuReq order(Double order) {
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

  public CreateMenuReq externalLink(String externalLink) {
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

  public CreateMenuReq blank(Boolean blank) {
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

  public CreateMenuReq icon(String icon) {
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

  public CreateMenuReq badge(String badge) {
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

  public CreateMenuReq badgeDot(String badgeDot) {
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

  public CreateMenuReq badgeStatus(String badgeStatus) {
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

  public CreateMenuReq enable(Boolean enable) {
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

  public CreateMenuReq expanded(Boolean expanded) {
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

  public CreateMenuReq acl(String acl) {
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

  public CreateMenuReq paths(List<Object> paths) {
    this.paths = paths;
    return this;
  }

  public CreateMenuReq addPathsItem(Object pathsItem) {
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

  public CreateMenuReq parent(String parent) {
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

  public CreateMenuReq permissions(List<Object> permissions) {
    this.permissions = permissions;
    return this;
  }

  public CreateMenuReq addPermissionsItem(Object permissionsItem) {
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

  public CreateMenuReq isMenu(Boolean isMenu) {
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
    CreateMenuReq createMenuReq = (CreateMenuReq) o;
    return Objects.equals(this.name, createMenuReq.name) &&
        Objects.equals(this.slug, createMenuReq.slug) &&
        Objects.equals(this.group, createMenuReq.group) &&
        Objects.equals(this.link, createMenuReq.link) &&
        Objects.equals(this.order, createMenuReq.order) &&
        Objects.equals(this.externalLink, createMenuReq.externalLink) &&
        Objects.equals(this.blank, createMenuReq.blank) &&
        Objects.equals(this.icon, createMenuReq.icon) &&
        Objects.equals(this.badge, createMenuReq.badge) &&
        Objects.equals(this.badgeDot, createMenuReq.badgeDot) &&
        Objects.equals(this.badgeStatus, createMenuReq.badgeStatus) &&
        Objects.equals(this.enable, createMenuReq.enable) &&
        Objects.equals(this.expanded, createMenuReq.expanded) &&
        Objects.equals(this.acl, createMenuReq.acl) &&
        Objects.equals(this.paths, createMenuReq.paths) &&
        Objects.equals(this.parent, createMenuReq.parent) &&
        Objects.equals(this.permissions, createMenuReq.permissions) &&
        Objects.equals(this.isMenu, createMenuReq.isMenu);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, slug, group, link, order, externalLink, blank, icon, badge, badgeDot, badgeStatus, enable, expanded, acl, paths, parent, permissions, isMenu);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateMenuReq {\n");
    
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

