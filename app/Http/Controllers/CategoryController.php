<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::latest()->get();
        return response()->json([
            'categories' => $categories
        ],200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validation check
        $this->validate($request, [
            'category_name' => 'required|unique:categories,category_name',
        ],[
            'category_name.required' => 'Please Provide Category Name!'
        ]);

        Category::create([
           'category_name' => $request->category_name,
           'category_slug' => Str::slug($request->category_name),
        ]);

       return response()->json(['message' => "Category Added Successfully" ],200);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        // return $category->id;
       $category = Category::find($category->id);
       return response()->json([ 'edit_categories' => $category ],200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
         // validation check
        $this->validate($request, [
            'category_name' => 'required','unique:categories,category_name'.$category->id,
        ],[
            'category_name.required' => 'Please Provide Category Name!'
        ]);

        $category = Category::find($category->id);
        if ($category) {
            $category->update([
               'category_name' => $request->category_name,
               'category_slug' => Str::slug($request->category_name),
            ]);
            return response()->json(['message' => "Category Updated Successfully" ],200);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category = Category::find($category->id);
        if ($category) {
           $category->delete();
           return response()->json(['message' => "Category Deleted Successfully" ],200);
        }
    }
    /**
     * Inactive the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function inactive($id)
    {
        $category = Category::find($id);
        if ($category) {
           $category->update(['status' => 2]);
           return response()->json(['message' => "Category Inactive Successfully" ],200);
        }
    }
    /**
     * Active the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function active($id)
    {
        $category = Category::find($id);
        if ($category) {
            $category->update(['status' => 1]);
           return response()->json(['message' => "Category Active Successfully" ],200);
        }
    }
}
