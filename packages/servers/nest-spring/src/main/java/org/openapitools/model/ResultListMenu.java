package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.model.Menu;
import org.openapitools.model.Query;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class ResultListMenu   {
  @JsonProperty("list")
  @Valid
  private List<Menu> list = new ArrayList<>();

  @JsonProperty("count")
  private Double count;

  @JsonProperty("query")
  private Query query = null;

  public ResultListMenu list(List<Menu> list) {
    this.list = list;
    return this;
  }

  public ResultListMenu addListItem(Menu listItem) {
    this.list.add(listItem);
    return this;
  }

  /**
   * 
   * @return list
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull

  @Valid

  public List<Menu> getList() {
    return list;
  }

  public void setList(List<Menu> list) {
    this.list = list;
  }

  public ResultListMenu count(Double count) {
    this.count = count;
    return this;
  }

  /**
   * 
   * @return count
  */
  @ApiModelProperty(value = "")


  public Double getCount() {
    return count;
  }

  public void setCount(Double count) {
    this.count = count;
  }

  public ResultListMenu query(Query query) {
    this.query = query;
    return this;
  }

  /**
   * Get query
   * @return query
  */
  @ApiModelProperty(value = "")

  @Valid

  public Query getQuery() {
    return query;
  }

  public void setQuery(Query query) {
    this.query = query;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResultListMenu resultList$Menu = (ResultListMenu) o;
    return Objects.equals(this.list, resultList$Menu.list) &&
        Objects.equals(this.count, resultList$Menu.count) &&
        Objects.equals(this.query, resultList$Menu.query);
  }

  @Override
  public int hashCode() {
    return Objects.hash(list, count, query);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResultListMenu {\n");
    
    sb.append("    list: ").append(toIndentedString(list)).append("\n");
    sb.append("    count: ").append(toIndentedString(count)).append("\n");
    sb.append("    query: ").append(toIndentedString(query)).append("\n");
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

