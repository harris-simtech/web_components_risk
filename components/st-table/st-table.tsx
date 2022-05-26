import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'st-table',
  styleUrl: 'st-table.css',
  shadow: true,
})
export class StTable {
  @Prop() last: string;

  @Prop() header: string[];
  @Prop() data: {name: string; description: string; likelihood: string}[];
  @State() searchValue: string = '';



  searchData(event){
    console.log(event.target.value);
    this.searchValue = event.target.value;
  }


  filterData(){
      let filteredData = this.data.filter(el => el.name.toLowerCase().includes(this.searchValue.toLowerCase()) || el.description.toLowerCase().includes(this.searchValue.toLowerCase()) || el.likelihood.toLowerCase().includes(this.searchValue.toLowerCase()));
      return filteredData;
  }

  render() {
      return (
    <div>
	<input type='text' placeholder='Search' value={this.searchValue} onInput={(event)=>this.searchData(event)}/>
	<table>
	    <thead>
		<tr>
		    {this.header.map(el => (<th>{el}</th>))}
		</tr>
	    </thead>
	    <tbody>
		{this.filterData().map(el => (<tr><td>{el.name}</td><td>{el.description}</td><td>{el.likelihood}</td></tr>))}
	    </tbody>
	</table>
    </div>);
  }
}
