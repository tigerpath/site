 var login = "{{ user }}"
  var CourseSearch = React.createClass({
     getInitialState: function() {
      return {
         value: 'COS 226',
         courses: []
      };
    },
    handleChange: function(ev) {
      this.setState({value: ev.target.value});
    },
    handleClick: function(ev){
      if (this.state.value == 'COS 226'){
            this.setState({value: ''})}
    },
    submit: function(ev) {
      ev.preventDefault();
      var matchedCourses = <Courses query={this.state.value} username={this.props.username}/>
      this.setState({value: '', courses: ["hi"].concat(matchedCourses)});
      
    },
    render: function() {
      return (

        <div class="row">
        <div class="col-md-12">
        <h5>Search for your class</h5>
            <div id="custom-search">
                <form onSubmit={this.submit}>
                <div class="input-group col-md-12">
                    <input type="text" class="form-control input-lg" placeholder="COS 226" onClick={this.handleClick} onChnange={this.handleChange}/>
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="button">
                            <i class="glyphicon glyphicon-search"></i>
                        </button>
                    </span>
                </div>
                </form>
            </div>
        </div> 
     </div>

        </div>
        Add a Course:
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.value}
            onClick={this.handleClick}
            onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
        <div>
        {this.state.courses}
        </div>
        </div>
      );
     }
  });
  var Courses = React.createClass({
    getInitialState: function() {
      return {
        matches: "{{all_courses}}"
      };
    },
    searchCourses: function(ev) {
      var matchedcourses = [];
      var all_courses = "{{all_courses}}"
      var j = 0;
      for (x in all_courses) {
        if (j > 10) {break;}
        matchedcourses.push(x);
        j = j + 1;
      }
      this.setState({matches: matchedcourses});
    },

    render: function() {
      return (
        <div>{this.state.matches}</div>
      );
     }
  });

    ReactDOM.render(
      <CourseSearch username={login}/>,
      document.getElementById('message')
    );