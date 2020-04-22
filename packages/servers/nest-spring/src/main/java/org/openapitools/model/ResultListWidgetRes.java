package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.model.Query;
import org.openapitools.model.WidgetRes;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2020-04-22T03:09:30.309Z[GMT]")

public class ResultListWidgetRes   {
  @JsonProperty("list")
  @Valid
  private List<WidgetRes> list = new ArrayList<>();

  @JsonProperty("count")
  private Double count;

  @JsonProperty("query")
  private Query query;

  public ResultListWidgetRes list(List<WidgetRes> list) {
    this.list = list;
    return this;
  }

  public ResultListWidgetRes addListItem(WidgetRes listItem) {
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

  public List<WidgetRes> getList() {
    return list;
  }

  public void setList(List<WidgetRes> list) {
    this.list = list;
  }

  public ResultListWidgetRes count(Double count) {
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

  public ResultListWidgetRes query(Query query) {
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
    ResultListWidgetRes resultList$WidgetRes = (ResultListWidgetRes) o;
    return Objects.equals(this.list, resultList$WidgetRes.list) &&
        Objects.equals(this.count, resultList$WidgetRes.count) &&
        Objects.equals(this.query, resultList$WidgetRes.query);
  }

  @Override
  public int hashCode() {
    return Objects.hash(list, count, query);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResultListWidgetRes {\n");
    
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

