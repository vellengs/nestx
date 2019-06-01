package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.model.Query;
import org.openapitools.model.User;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-05-14T08:00:41.276Z[Etc/UTC]")

public class ResultListUser   {
  @JsonProperty("list")
  @Valid
  private List<User> list = new ArrayList<>();

  @JsonProperty("count")
  private Double count;

  @JsonProperty("query")
  private Query query = null;

  public ResultListUser list(List<User> list) {
    this.list = list;
    return this;
  }

  public ResultListUser addListItem(User listItem) {
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

  public List<User> getList() {
    return list;
  }

  public void setList(List<User> list) {
    this.list = list;
  }

  public ResultListUser count(Double count) {
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

  public ResultListUser query(Query query) {
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
    ResultListUser resultList$User = (ResultListUser) o;
    return Objects.equals(this.list, resultList$User.list) &&
        Objects.equals(this.count, resultList$User.count) &&
        Objects.equals(this.query, resultList$User.query);
  }

  @Override
  public int hashCode() {
    return Objects.hash(list, count, query);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResultListUser {\n");
    
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

