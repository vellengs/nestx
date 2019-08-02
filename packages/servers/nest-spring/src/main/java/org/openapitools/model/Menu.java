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

public class Menu   {
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
  private List<Object> paths = new ArrayList<>();

  @JsonProperty("parent")
  private Object parent = null;

  @JsonProperty("permissions")
  @Valid
  private List<Object> permissions = null;

  @JsonProperty("isMenu")
  private Boolean isMenu;

  public Menu id(String id) {
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

  public Menu name(String name) {
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

  public Menu slug(String slug) {
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

  public Menu group(Boolean group) {
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

  public Menu link(String link) {
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

  public Menu order(Double order) {
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

  public Menu externalLink(String externalLink) {
    this.externalLink = externalLink;
    return this;
  }

  /**
   * 
   * @return externalLink
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getExternalLink() {
    return externalLink;
  }

  public void setExternalLink(String externalLink) {
    this.externalLink = externalLink;
  }

  public Menu blank(Boolean blank) {
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

  public Menu icon(String icon) {
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

  public Menu badge(String badge) {
    this.badge = badge;
    return this;
  }

  /**
   * 
   * @return badge
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getBadge() {
    return badge;
  }

  public void setBadge(String badge) {
    this.badge = badge;
  }

  public Menu badgeDot(String badgeDot) {
    this.badgeDot = badgeDot;
    return this;
  }

  /**
   * 
   * @return badgeDot
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getBadgeDot() {
    return badgeDot;
  }

  public void setBadgeDot(String badgeDot) {
    this.badgeDot = badgeDot;
  }

  public Menu badgeStatus(String badgeStatus) {
    this.badgeStatus = badgeStatus;
    return this;
  }

  /**
   * 
   * @return badgeStatus
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getBadgeStatus() {
    return badgeStatus;
  }

  public void setBadgeStatus(String badgeStatus) {
    this.badgeStatus = badgeStatus;
  }

  public Menu enable(Boolean enable) {
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

  public Menu expanded(Boolean expanded) {
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

  public Menu acl(String acl) {
    this.acl = acl;
    return this;
  }

  /**
   * 
   * @return acl
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getAcl() {
    return acl;
  }

  public void setAcl(String acl) {
    this.acl = acl;
  }

  public Menu paths(List<Object> paths) {
    this.paths = paths;
    return this;
  }

  public Menu addPathsItem(Object pathsItem) {
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

  public Menu parent(Object parent) {
    this.parent = parent;
    return this;
  }

  /**
   * 
   * @return parent
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public Object getParent() {
    return parent;
  }

  public void setParent(Object parent) {
    this.parent = parent;
  }

  public Menu permissions(List<Object> permissions) {
    this.permissions = permissions;
    return this;
  }

  public Menu addPermissionsItem(Object permissionsItem) {
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

  public Menu isMenu(Boolean isMenu) {
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
    Menu menu = (Menu) o;
    return Objects.equals(this.id, menu.id) &&
        Objects.equals(this.name, menu.name) &&
        Objects.equals(this.slug, menu.slug) &&
        Objects.equals(this.group, menu.group) &&
        Objects.equals(this.link, menu.link) &&
        Objects.equals(this.order, menu.order) &&
        Objects.equals(this.externalLink, menu.externalLink) &&
        Objects.equals(this.blank, menu.blank) &&
        Objects.equals(this.icon, menu.icon) &&
        Objects.equals(this.badge, menu.badge) &&
        Objects.equals(this.badgeDot, menu.badgeDot) &&
        Objects.equals(this.badgeStatus, menu.badgeStatus) &&
        Objects.equals(this.enable, menu.enable) &&
        Objects.equals(this.expanded, menu.expanded) &&
        Objects.equals(this.acl, menu.acl) &&
        Objects.equals(this.paths, menu.paths) &&
        Objects.equals(this.parent, menu.parent) &&
        Objects.equals(this.permissions, menu.permissions) &&
        Objects.equals(this.isMenu, menu.isMenu);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, slug, group, link, order, externalLink, blank, icon, badge, badgeDot, badgeStatus, enable, expanded, acl, paths, parent, permissions, isMenu);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Menu {\n");
    
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

