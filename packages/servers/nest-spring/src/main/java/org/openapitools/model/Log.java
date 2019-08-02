package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-06-14T14:09:29.012Z[Etc/UTC]")

public class Log   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("name")
  private String name;

  @JsonProperty("operator")
  private String operator;

  @JsonProperty("operatorName")
  private String operatorName;

  @JsonProperty("ip")
  private String ip;

  @JsonProperty("operation")
  private String operation;

  @JsonProperty("result")
  private Double result;

  @JsonProperty("elapsed")
  private Double elapsed;

  @JsonProperty("comment")
  private String comment;

  @JsonProperty("createdAt")
  private OffsetDateTime createdAt;

  public Log id(String id) {
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

  public Log name(String name) {
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

  public Log operator(String operator) {
    this.operator = operator;
    return this;
  }

  /**
   * 
   * @return operator
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getOperator() {
    return operator;
  }

  public void setOperator(String operator) {
    this.operator = operator;
  }

  public Log operatorName(String operatorName) {
    this.operatorName = operatorName;
    return this;
  }

  /**
   * 
   * @return operatorName
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getOperatorName() {
    return operatorName;
  }

  public void setOperatorName(String operatorName) {
    this.operatorName = operatorName;
  }

  public Log ip(String ip) {
    this.ip = ip;
    return this;
  }

  /**
   * 
   * @return ip
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }

  public Log operation(String operation) {
    this.operation = operation;
    return this;
  }

  /**
   * 
   * @return operation
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public String getOperation() {
    return operation;
  }

  public void setOperation(String operation) {
    this.operation = operation;
  }

  public Log result(Double result) {
    this.result = result;
    return this;
  }

  /**
   * 
   * @return result
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getResult() {
    return result;
  }

  public void setResult(Double result) {
    this.result = result;
  }

  public Log elapsed(Double elapsed) {
    this.elapsed = elapsed;
    return this;
  }

  /**
   * 
   * @return elapsed
  */
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Double getElapsed() {
    return elapsed;
  }

  public void setElapsed(Double elapsed) {
    this.elapsed = elapsed;
  }

  public Log comment(String comment) {
    this.comment = comment;
    return this;
  }

  /**
   * 
   * @return comment
  */
  @ApiModelProperty(value = "")


  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  public Log createdAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  /**
   * 
   * @return createdAt
  */
  @ApiModelProperty(value = "")

  @Valid

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Log log = (Log) o;
    return Objects.equals(this.id, log.id) &&
        Objects.equals(this.name, log.name) &&
        Objects.equals(this.operator, log.operator) &&
        Objects.equals(this.operatorName, log.operatorName) &&
        Objects.equals(this.ip, log.ip) &&
        Objects.equals(this.operation, log.operation) &&
        Objects.equals(this.result, log.result) &&
        Objects.equals(this.elapsed, log.elapsed) &&
        Objects.equals(this.comment, log.comment) &&
        Objects.equals(this.createdAt, log.createdAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, operator, operatorName, ip, operation, result, elapsed, comment, createdAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Log {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    operator: ").append(toIndentedString(operator)).append("\n");
    sb.append("    operatorName: ").append(toIndentedString(operatorName)).append("\n");
    sb.append("    ip: ").append(toIndentedString(ip)).append("\n");
    sb.append("    operation: ").append(toIndentedString(operation)).append("\n");
    sb.append("    result: ").append(toIndentedString(result)).append("\n");
    sb.append("    elapsed: ").append(toIndentedString(elapsed)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
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

