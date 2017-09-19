//
//  ViewController.m
//  RNDemo
//
//  Created by 王鹏华 on 2017/6/20.
//  Copyright © 2017年 Hell. All rights reserved.
//

#import "ViewController.h"
#import "ScoreViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (IBAction)jumpToController:(UIButton *)sender {
    
    ScoreViewController *vc = [[ScoreViewController alloc]init];
    
    [self presentViewController:vc animated:YES completion:nil];
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
