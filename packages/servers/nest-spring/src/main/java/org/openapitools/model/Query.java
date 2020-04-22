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
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2020-04-22T03:09:30.309Z[GMT]")

public class Query   {
  @JsonProperty("size")
  private Double size;

  @JsonProperty("page")
  private Double page;

  public Query size(Double size) {
    this.size = size;
    return this;
  }

  /**
   * 
   * @return size
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getSize() {
    return size;
  }

  public void setSize(Double size) {
    this.size = size;
  }

  public Query page(Double page) {
    this.page = page;
    return this;
  }

  /**
   * 
   * @return page
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getPage() {
    return page;
  }

  public void setPage(Double page) {
    this.page = page;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Query query = (Query) o;
    return Objects.equals(this.size, query.size) &&
        Objects.equals(this.page, query.page);
  }

  @Override
  public int hashCode() {
    return Objects.hash(size, page);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Query {\n");
    
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    page: ").append(toIndentedString(page)).append("\n");
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

